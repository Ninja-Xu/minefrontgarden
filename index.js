let axios = require('axios')

const root = 'https://jsonplaceholder.typicode.com'

axios.get(`${root}/posts/`)
  .then(rs => {
    let { data } = rs;
    let ids = data.reduce(function(posts, post) {
      posts[post.userId] = posts[post.userId] || [];
      let { title, body } = post
      posts[post.userId].push({
        title
      })
      return posts
    }, {})
    console.log(JSON.stringify(ids, null, 2))
  })
  .catch(err => console.log(err))