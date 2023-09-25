import { useLoaderData } from "react-router-dom";
import Header from "../../components/header/header";
import Card from "./card";

const Home = () => {
    const cards = useLoaderData();

    return (
        <div>
            <Header></Header>

            <Card cards={cards}></Card>
        </div>
    );
};

export default Home;
