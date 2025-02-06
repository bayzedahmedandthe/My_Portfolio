import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Skills from "../Components/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
        children: [
            {
                path: "/skills",
                element: <Skills></Skills>
            }
        ]
    },
]);


export default router;