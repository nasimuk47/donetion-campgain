/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Donation = () => {
    const [donatedCards, setDonatedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4); // Initially, show up to 4 cards

    useEffect(() => {
        // Retrieve the array of donated cards from localStorage
        const storedCards =
            JSON.parse(localStorage.getItem("donatedCards")) || [];
        setDonatedCards(storedCards);
    }, []);

    const handleSeeAllClick = () => {
        // Increase the number of visible cards when "See All" is clicked
        setVisibleCards(donatedCards.length);
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {donatedCards
                    .slice(0, visibleCards)
                    .map((donatedCard, index) => (
                        <div
                            key={index}
                            className="flex w-[650px] h-[220px] mt-5 gap-5 flex-row rounded-xl shadow-md"
                            style={{ backgroundColor: donatedCard.card_color }}>
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
                                <img
                                    src={donatedCard.image}
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="p-6">
                                <h6
                                    className="mb-4 block font-sans text-base font-semibold"
                                    style={{ color: donatedCard.text_color }}>
                                    {donatedCard.category}
                                </h6>

                                <p
                                    className="mb-8 block font-sans text-2xl font-semibold leading-relaxed antialiased"
                                    style={{ color: donatedCard.text_color }}>
                                    {donatedCard.title}
                                </p>

                                <p
                                    className="text-xl font-semibold"
                                    style={{ color: donatedCard.text_color }}>
                                    <span>$</span> {donatedCard.price}
                                </p>
                                <a className="inline-block" href="#">
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold"
                                        type="button"
                                        style={{
                                            backgroundColor:
                                                donatedCard.text_color,
                                            color: "#fff",
                                        }}>
                                        View Details
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
            {donatedCards.length > 4 && visibleCards < donatedCards.length && (
                <button
                    className="mt-5 py-2 px-4 rounded-md bg-blue-500  text-white font-semibold"
                    onClick={handleSeeAllClick}>
                    See All
                </button>
            )}
        </div>
    );
};

export default Donation;
