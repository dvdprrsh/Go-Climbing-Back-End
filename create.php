<?php
$postId = uniqid(GOCLIMB,true);
$postTitle = $_GET['posttitle'];
$postBody = $_GET['postbody'];
$username = $_GET['username'];
$postDateTime = date('Y-m-d H:i:s');
$data = array("id" => $postId, "title" => $postTitle, "body" => $postBody, "username" => $username, "postDateTime" => $postDateTime);

$json = file_get_contents("print.json");
$tempArray = json_decode($json);

$tempArray[] = $data;
$jsonData = json_encode($tempArray);

file_put_contents("print.json", $jsonData);





?>
