import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
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
  ]

  return (
    <Container fluid className="App">
      <Header></Header>
      <Container>
        <Stack direction="horizontal">
          <Sidebar></Sidebar>
          <Container>
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
          </Container>
        </Stack>
      </Container>
    </Container >
  );
}