const fetch = require('node-fetch');

const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/comments'
];

const fetchAll = async () => {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const results = await Promise.all(responses.map(response => response.json()));
  return results;
};

fetchAll().then(results => {
  console.log(results);
});