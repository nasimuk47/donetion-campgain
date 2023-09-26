/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Header from "../../components/header/header";
import Card from "./card";

// eslint-disable-next-line no-unused-vars
const Home = ({ fetchData }) => {
    const cards = useLoaderData();

    return (
        <div>
            <Header></Header>

            <Card cards={cards}></Card>
        </div>
    );
};

export default Home;
