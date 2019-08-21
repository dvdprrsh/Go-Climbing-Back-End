import app from '../app';

const port = 3000;
app.listen(port, 'localhost', () => {
  console.log('Listening at http://localhost:%s', port);
});
