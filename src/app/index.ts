import express from "express";
import cors from "cors";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { json, urlencoded } from "body-parser";
import uuid from "uuid";

const app = express();

app.use(cors()); // Removes the cors issue
/**
 * https://github.com/expressjs/body-parser#bodyparserjsonoptions
 * read this to unders stand { json, urlencoded } imports used
 * below with express
 */
app.use(json());
app.use(urlencoded({ extended: true }));

const adapter = new FileSync<object>("db.json");
const db: any = low(adapter);
db.defaults({ posts: [] }).write();

// Routes
// GET /posts/:id
app.get("/posts", async (req, res) => {
  const posts = db.get("posts").value();
  res.send(posts);
});

// POST /posts
app.post("/posts", async (req, res) => {
  const post = db
    .get("posts")
    .push(req.body)
    .last()
    .assign({ id: "GOCLIMB" + uuid.v4() })
    .write();

  res.send(post);
});

app.delete("/posts/:id", async (req, res) => {
  db.get("posts")
    .remove({ id: req.params.id })
    .write();
  res.send();
});

app.get("/crags", async (req, res) => {
  const posts = db.get("crags").value();
  res.send(posts);
});

app.get("/gyms", async (req, res) => {
  const posts = db.get("gyms").value();
  res.send(posts);
});

export default app;
