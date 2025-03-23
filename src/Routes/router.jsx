import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Layoutes/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
        ]
    },
]);


export default router;