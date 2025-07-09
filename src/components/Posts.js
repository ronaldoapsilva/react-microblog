export default function Posts() {
  const post = [
    {
      id: 1,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      }
    },
    {
      id: 2,
      text: 'Second Post',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      }
    },
  ];
  return (
    <>
      {post.length === 0 ?
        <p>There are no blog post.</p>
        :
        post.map(post => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b> &mdash; {post.timestamp}
              <br></br>
              {post.text}
            </p>
          );
        })
      }
    </>
  )
}