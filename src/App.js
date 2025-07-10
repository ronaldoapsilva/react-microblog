import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";

export default function App() {


  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FeedPage/>}></Route>
          <Route path="/explore" element={<ExplorePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </Container >
  );
}