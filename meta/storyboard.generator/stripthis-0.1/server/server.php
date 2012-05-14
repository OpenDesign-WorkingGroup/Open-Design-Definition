<?php
	include("settings.php");
	
	function servestrip($data) {
		echo "OK:".$data["stripid"]."*".date("YmdHis",$data["stripdate"])."*".$data["readcount"]."*".$data["striptext"];
	}
	
	function generatesignature($data) {
		$data=str_replace("\t"," ",$data);
		$data=str_replace("\r","",$data);
		do {
			$oldkey=$data;
			$data=str_replace("  "," ",$data);
			$data=str_replace("\n ","\n",$data);
			$data=str_replace("\n\n","\n",$data);
		} while ($oldkey!=$data);
		$data=strtolower(trim($data));
		if (strlen($data)==0)
			return false;
		else
			return md5($data);

	}
	
	switch ($_GET["a"]) {
		case "post":{
			if ($_GET["writekey"]!=$settings["writekey"])
				echo "ERROR:Invalid writekey.";
			else if ((function_exists("custom_checkprepare")?custom_checkprepare():checkprepare())) {
				dbconnect();
				$data = stripslashes($_POST["text"]);
				if ($data) {
					if (strlen($data)>$settings["maxlength"])
						echo "ERROR:Comic too long (>".$settings["maxlength"]." chars)";
					else {
						$signature=generatesignature($data);
						if ($signature) {
							$data = mysql_real_escape_string($data);
							$sql="insert into ".$settings["table"]." (striptext,signature) values ('".$data."','".$signature."')";
							if (!mysql_query($sql))
								if (mysql_errno()==1062)
									echo "ERROR:This comic already exists.";
								else
									echo "ERROR:SQL Error - (".mysql_errno().") ".mysql_error();
							else {
								$sid=mysql_insert_id();
								echo "OK:".$settings["siteprefix"].$sid."*".$sid;
							}					
						} else 
							echo "ERROR:Invalid comic script.";
					}
				} else
					echo "ERROR:Empty data.";
			}
			break;
		}
		case "get":{
			dbconnect();
			$data = $_GET["comicid"];
			$data=(int)$data; // Force number
			if ($data) {
				$data = mysql_real_escape_string($data);			
				$sql="select stripid,striptext,readcount,unix_timestamp(stripdate) as stripdate from ".$settings["table"]." where stripid='".$data."'";
				$result=mysql_query($sql);
				if (!$result)
					echo "ERROR:SQL Error - ".mysql_error();
				else if (($row = mysql_fetch_assoc($result))&&($row["striptext"])) {
					mysql_query("update ".$settings["table"]." set readcount=readcount+1 where stripid='".$data."'");
					$data["readcount"]=$data["readcount"]+1;
					servestrip($row);
				} else
					echo "ERROR:Comic not found  (".$data.").";
			} else
				echo "ERROR:Invalid strip number (".$data.").";
			break;
		}
		case "last":{
			dbconnect();		
			$result=mysql_query("SHOW TABLE STATUS LIKE \"".$settings["table"]."\"");
			if (!$result)
				echo "ERROR:SQL Error - ".mysql_error();
			else if (($row = mysql_fetch_assoc($result))&&($row["Auto_increment"]>1))
				echo "OK:".($row["Auto_increment"]-1);
			else
				echo "ERROR:No comics available.";
			break;
		}
		case "prepare":{
			if (function_exists("custom_doprepare"))
				custom_doprepare();
			else
				doprepare();
			break;
		}
	}
?>