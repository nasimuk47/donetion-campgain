/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import CardList from "./Card";

const Home = ({ fetchData }) => {
    const [allDonations, setAllDonations] = useState([]);
    const [filteredDonations, setFilteredDonations] = useState([]);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setAllDonations(data);
                setFilteredDonations(data);
            })
            .catch(() => {});
    }, [fetchData]);

    return (
        <div>
            <Header
                allDonations={allDonations}
                setFilteredDonations={setFilteredDonations}
            />

            <CardList cards={filteredDonations}></CardList>
        </div>
    );
};

export default Home;
