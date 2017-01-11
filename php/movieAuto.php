<?php

//CREDENTIALS FOR DB

mysql_connect("107.180.56.151","nikhilsc10", "Nikhilsc10") or die("Can't connect to server. Please check credentials and try again");
mysql_select_db("movieData") or die("Can't select database. Please check DB name and try again"); 

$input=$_REQUEST['input']; 
$input = mysql_real_escape_string(trim($input));
$sql="SELECT DISTINCT `Title` FROM `TABLE1` WHERE `Title` LIKE '".$input."%' LIMIT 10";
$data = mysql_query($sql);
$arr = -1;
$dataArray = array();

while($temp = mysql_fetch_array($data)) {
  foreach($temp as $key=>$val)
  {
   $temp[$key] = stripslashes($val);
   $arr++;
 }
 $dataArray[$arr] = $temp;
}
$list = "<ul class='unorganised'>";
foreach($dataArray as $val)
{
 $list .= "<li>".$val['Title']."</li>";
}
$list .="</ul>";

echo $list;

?>