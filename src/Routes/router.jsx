import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Layoutes/Layout";
import BistroBoss from "../Components/BistroBoss";
import JobPortal from "../Components/JobPortal";
import ServiceReview from "../Components/ServiceReview";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path:"/bostroBoss",
                element: <BistroBoss></BistroBoss>
            },
            {
                path: "/jobPortal", 
                element: <JobPortal></JobPortal>
            },
            {
                path: "/serviceReview",
                 element: <ServiceReview></ServiceReview>
            }
        ]
    },
]);


export default router;