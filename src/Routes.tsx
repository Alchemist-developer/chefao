import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PublicFeed from './Pages/PublicFeed';

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <WrapperRoutes>
            <Route path='/' element={<PublicFeed />}></Route>
        </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes;