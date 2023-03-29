import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
  const [jsonPlaceholderResponse, githubResponse] = await Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    axios.get('https://api.github.com/users/defunkt')
  ]);

  const data = {
    posts: jsonPlaceholderResponse.data,
    user: githubResponse.data
  };

  res.json(data);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
