import { Container, Stack } from "react-bootstrap";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";

export default function App() {


  return (
    <Container fluid className="App">
      <Header></Header>
      <Container>
        <Stack direction="horizontal">
          <Sidebar></Sidebar>
          <Container>
            <Posts></Posts>
          </Container>
        </Stack>
      </Container>
    </Container >
  );
}