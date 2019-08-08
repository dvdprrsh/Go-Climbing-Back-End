# README

This README would normally document whatever steps are necessary to get your application up and running.

### File structure

- create.php - Adds data to print.json based on URL arguments passed
- delete.php - Removes json object from print.json based on URL argumet passed
- print.json - Stores posts

### Arguments

### Create.php

- postid - This is automatically generated but can be passed if needed
- posttitle - Title of the post
- postbody - Body of the post
- username - Username of post submitter

### Delete.php

- postid - PostID of post(Stored under 'id' in print.json)

### How to use

- API can be accessed at https://empiredigital.eu/goclimbing/ (Directory listing is enabled)
- MacOS - Can be run locally using php -S localhost:8000
- Windows - XAMPP?
