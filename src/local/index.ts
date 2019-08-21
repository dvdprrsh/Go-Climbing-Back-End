import app from "../app";

const port = 3001;
app.listen(port, () => {
  console.log("Listening at http://localhost:%s", port);
});
