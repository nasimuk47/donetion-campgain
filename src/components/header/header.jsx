/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ allDonations, setFilteredDonations }) => {
    const [categoryInput, setCategoryInput] = useState("");

    const handleSearch = () => {
        const filteredDonations = allDonations.filter((donation) =>
            donation.category
                .toLowerCase()
                .includes(categoryInput.toLowerCase())
        );

        setFilteredDonations(filteredDonations);
    };

    return (
        <header
            className="h-96 mt-2"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png)",
            }}>
            <div className="hero-overlay bg-opacity-200 bg-[#FFFFFFF2] flex justify-center items-center">
                <div>
                    <div>
                        <h1 className="text-5xl font-bold">
                            I Grow By Helping People In Need
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="w-96 h-12 rounded-md bg-slate-50 input-bordered"
                                value={categoryInput}
                                onChange={(e) =>
                                    setCategoryInput(e.target.value)
                                }
                            />
                        </div>
                        <button
                            className="w-28 h-12 bg-[#FF444A] rounded-md"
                            onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    allDonations: PropTypes.array.isRequired,
    setFilteredDonations: PropTypes.func.isRequired,
};

export default Header;
