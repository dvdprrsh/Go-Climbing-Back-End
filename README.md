# go-climbing-backend

Gone are the days of PHP, NodeJS enters the ring

### File structure

```
│
│── README.MD             <-- This instructions file
│── db.json       		  <-- Json database file
│── package.json          <-- NodeJS dependencies and scripts
│── node_modules          <-- Installed packages
│── src                   <-- Source directory
│   └── app               <-- index.ts to run backend
│   └── fakeData          <-- Unused
│   └── local             <-- Console output
```
### Arguments

### GET

- /posts    <-- Returns a list of forum posts in Json
- /gyms     <-- Returns a list of Gyms in Json
- /crags    <-- Returns a list of crags in Json

### POST

- /posts <-- title,body,profileimg,username Adds a post to db.json

### DELETE

- /posts/id <-- Deletes a post that matches the ID passed

### How to use

- API can be accessed at http://51.255.163.79:3001/
- Can be run locally using npm start
