<?php
$postId = uniqid(GOCLIMB,true);
$postTitle = $_GET['posttitle'];
$postBody = $_GET['postbody'];
$username = $_GET['username'];
$profileImg = $_GET['profileimg'];
$postDateTime = date('Y-m-d H:i:s');
$data = array("id" => $postId, "title" => $postTitle, "body" => $postBody, "username" => $username, "profileimg" => $profileImg, "postDateTime" => $postDateTime);

$json = file_get_contents("print.json");
$tempArray = json_decode($json);

$tempArray[] = $data;
$jsonData = json_encode($tempArray);

file_put_contents("print.json", $jsonData);





?>
