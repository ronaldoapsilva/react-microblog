import Container from "react-bootstrap/Container";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import ApiProvider from "./contexts/ApiProvider";
import FlashProvider from "./contexts/FlashProvider";
import UserProvider from "./contexts/UserProvider";
import EditUserPage from "./pages/EditUserPage";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <FlashProvider>
          <ApiProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>}></Route>
                <Route path="/register" element={<PublicRoute><RegistrationPage /></PublicRoute>} />
                <Route path="*" element={
                  <PrivateRoute>
                    <Routes>
                      <Route path="/" element={<FeedPage />}/>
                      <Route path="/explore" element={<ExplorePage />}/>
                      <Route path="/user/:username" element={<UserPage />}/>
                      <Route path="*" element={<Navigate to="/" />}/>
                      <Route path="/edit" element={<EditUserPage/>}/>
                    </Routes>
                  </PrivateRoute>
                } />
              </Routes>
            </UserProvider>
          </ApiProvider>
        </FlashProvider>
      </BrowserRouter>
    </Container >
  );
}