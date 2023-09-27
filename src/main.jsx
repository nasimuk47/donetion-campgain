// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import CardDetail from "./pages/Home/CardDetail";
import Notfound from "./pages/Notfound";

const fetchData = () => fetch("/data.json").then((response) => response.json());

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home fetchData={fetchData}></Home>,
                loader: fetchData,
            },
            {
                path: "/Donation",
                element: <Donation></Donation>,
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/card/:id",
                element: <CardDetail fetchData={fetchData} />,
                loader: fetchData,
            },
            {
                path: "*",
                element: <Notfound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
