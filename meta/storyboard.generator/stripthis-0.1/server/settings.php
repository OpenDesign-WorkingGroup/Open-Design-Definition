<?php
// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---
/*
	
	Server installation is quite simple: you need a PHP server that can reach a MySql database.
	This is the MySQL database dump for the Stripthis simple server:
		
	CREATE TABLE IF NOT EXISTS `stripthis` (
	  `stripid` bigint(20) NOT NULL AUTO_INCREMENT,
	  `signature` varchar(40) NOT NULL,
	  `stripdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  `striptext` text NOT NULL,
	  `readcount` bigint(20) NOT NULL,
	  PRIMARY KEY (`stripid`),
	  UNIQUE KEY `signature` (`signature`)
	) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;
	
	Is not very exciting, since is strictly bond to autoincrement values but keep in mind that this
	server is very plain and simple and just for demo purposes. You can make your own server and
	services that uses comicgenerator.js for publishing comics. Have a look to the "sample-index.html
	file for more scenarios, including serverless one.

*/

	// MYSQL Connection
	$settingsdefaultmysql["host"]="localhost";
	$settingsdefaultmysql["user"]="root";
	$settingsdefaultmysql["password"]="";
	$settingsdefaultmysql["database"]="stripthis";	
	
	// Comic databases
	
	$series=array(
		// The "stripthis" comic. That one that is on the homepage.
		"stripthis" => array(
			// Mysql connection details for this comic.
			"host" => $settingsdefaultmysql["host"],
			"user" => $settingsdefaultmysql["user"],
			"password" => $settingsdefaultmysql["password"],
			"database" => $settingsdefaultmysql["database"],
			//
			// The wrtitekey must me sent in GET order to add a comic to the database. If you change
			// this, remember to update the "_settings.server.script" setting in Comic Studio.
			// Was introduced as a really raw security switch: while all the server functions are in
			// the same server.php file and your comic page can point to the same URL of the Comic
			// Studio, you can put the Comic Studio page with the writekey set at a private address
			// and the comic page without the writekey on a public one, so should be harder to find
			// out the writekey and send bad comics to your server. :)
			// Obviously this isn't the best security system in the world but works enough for a
			// private comic strip site and for this demo.
			//
			"writekey" => "createarandomwritekey",
			// The table name on the database for this comic. Every comic must have its own table
			// in this sample server.
			"table" => "stripthis",
			// The comic site prefix. Is your index page with "#C-" appended.
			"siteprefix" => "http://127.0.0.1/~kesiev/stripthis/stripthis/sample-index.html#C-",
			// The max length of the script of an uploaded comic.
			"maxlength" => 5000,
			// Enable/disable the RSS feed
			"rssfeedenabled" => true,
			// The name of your RSS feed.
			"rssfeedname" => "StripThis!",
			// The feed description
			"rssfeeddescription" => "Web. Comics. For real.",
			// The number of the latest entries to be served on the RSS feed
			"rssfeedentries" => 20,
			// Your feed's homepage - tipically the same of "siteprefix" without "#C-"
			"rssfeedhome" => "http://127.0.0.1/~kesiev/stripthis/stripthis/"
		)
	/*
		, "comic2" => array(
			...
		)
		
		You can specify more comics too.
	*/
	);
	
	// You can send to the studio a message or a form before submitting a comic. You can use
	// it for preparing checks like captchas and so on. You probably don't need to change this
	// on your private webcomic.

	function doprepare() {
		echo "OK:<input type='hidden' name='prepared' value='yes'>\nMake sure that your comic is ok - we're going to publish this stuff!<br>When you're sure, just press this button.<br>";
	}
	
	function checkprepare() {
		if ($_POST["prepared"]=='yes')
			return true;
		else {
			echo "ERROR:Comic not prepared.";
			return false;
		}
	}
	
	// You can override settings or add more controls on a script outside from the installation
	// directory - tipically your comic directory. You can override "doprepare" and "checkprepare"
	// with "custom_doprepare" and "custom_checkprepare".
	
	if (@file_exists("../../settings-custom.php"))
		include_once("../../settings-custom.php");
		
		
	//
	// Server starts here.
	//
	
	
	if ($series[$_GET["seriesid"]])
		$settings=$series[$_GET["seriesid"]];
	else
		die("ERROR:Comic series not found.");
	
	// Database connection
	function dbconnect() {
		global $settings;
		
		if (!($sock=@mysql_connect($settings["host"],$settings["user"],$settings["password"]))) {
			echo "ERROR:Database login error.";
			exit;
		}
		
		if (!(@mysql_select_db($settings["database"]))) {
			echo "ERROR:Database not found.";
			exit;
		}
	}

?>