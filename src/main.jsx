import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";

import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,

        children: [
            {
                path: "/",

                element: <Home></Home>,

                loader: () => fetch("/data.json"),
            },

            {
                path: "/Donation",

                element: <Donation></Donation>,
            },

            {
                path: "/Statistics",

                element: <Statistics></Statistics>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
