<?php

//CREDENTIALS FOR DB

mysql_connect("107.180.56.151","nikhilsc10", "Nikhilsc10") or die("Can't connect to server. Please check credentials and try again");
mysql_select_db("movieData") or die("Can't select database. Please check DB name and try again"); 

$movieName=$_REQUEST['movieName']; 
$sql="SELECT `Locations` FROM `TABLE1` WHERE `Title` = '".$movieName."'";
$data = mysql_query($sql);
$arr = -1;
$dataArray = array();
while($temp = mysql_fetch_array($data,MYSQLI_ASSOC)) {

   $arr++;
   $dataArray[$arr] = $temp;
}
echo json_encode($dataArray);
?>