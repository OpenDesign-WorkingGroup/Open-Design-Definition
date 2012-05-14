<?php

	include("settings.php");

	function xmlentities ( $string )
	{
		return str_replace ( array ( '&', '"', "'", '<', '>' ), array ( '&amp;' , '&quot;', '&apos;' , '&lt;' , '&gt;' ), $string );
	}

	if ($settings["rssfeedenabled"]) {
		dbconnect();		
		header("Content-Type: application/rss+xml;charset=iso-8859-1");
		header("Vary: Accept");		
		echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\">\n<channel>\n<title>\n";
		echo utf8_encode(xmlentities($settings["rssfeedname"]));
		echo "</title><description>";
		echo utf8_encode(xmlentities($settings["rssfeeddescription"]));		
		echo "</description><link>";
		echo utf8_encode(xmlentities($settings["rssfeedhome"]));
		echo "</link>";
		$sql="select stripid,striptext,unix_timestamp(stripdate) as stripdate from ".$settings["table"]." order by stripid desc limit 0,".$settings["rssfeedentries"];
		$result=mysql_query($sql);
		while ($row=mysql_fetch_assoc($result)) {
			$pcs=preg_split("/\n/",trim($row["striptext"]));
			$title=trim($pcs[0]);
			$pubdate=date('D, d M Y H:i:s O',$row["stripdate"]);
			echo "<item><guid>";
			echo $settings["rssfeedhome"]."#C-".$row["stripid"];
			echo "</guid><title>";
			echo xmlentities($title);
			echo "</title><link>";
			echo $settings["rssfeedhome"]."#C-".$row["stripid"];
			echo "</link><description>";
			echo xmlentities($title)." @ ".$pubdate;
			echo "</description><pubDate>";
			echo $pubdate;
			echo "</pubDate></item>";
		}
		echo "</channel></rss>";
	}
?>