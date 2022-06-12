import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import ProfileUser from "./pages/ProfileUser";
import PublicFeed from "./pages/PublicFeed";
import Register from "./pages/Register";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/feed" element={<PublicFeed />}></Route>
        <Route path="/profile" element={<ProfileUser />}></Route>
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;