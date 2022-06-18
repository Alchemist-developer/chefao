import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login";
import ProfileUser from "../Pages/ProfileUser";
import PublicFeed from "../Pages/PublicFeed";
import Register from "../Pages/Register";
import RequireAuth from "./RequiredAuth";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/feed"
          element={
            <RequireAuth>
              <PublicFeed />
            </RequireAuth>
          }
        />

        <Route path="/profile" element={<ProfileUser />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;
