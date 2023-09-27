/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Donation = () => {
    const [donatedCards, setDonatedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const storedCards =
            JSON.parse(localStorage.getItem("donatedCards")) || [];
        setDonatedCards(storedCards);
    }, []);

    const handleSeeAllClick = () => {
        setVisibleCards(donatedCards.length);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {donatedCards
                    .slice(0, visibleCards)
                    .map((donatedCard, index) => (
                        <div
                            key={index}
                            className="flex w-full sm:w-[350px] md:w-[450px] lg:w-[650px] h-[220px] mt-5 gap-5 flex-row rounded-xl shadow-md"
                            style={{ backgroundColor: donatedCard.card_color }}>
                            <div className="relative w-2/5 sm:w-1/2 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
                                <img
                                    src={donatedCard.image}
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="p-6">
                                <h6
                                    className="w-1/2 sm:w-auto rounded-md p-2 block font-sans text-base font-semibold"
                                    style={{
                                        backgroundColor:
                                            donatedCard.category_color,
                                        color: donatedCard.text_color,
                                    }}>
                                    {donatedCard.category}
                                </h6>

                                <p
                                    className="mb-3 sm:mb-5 md:mb-8 block font-sans text-lg md:text-2xl font-semibold leading-relaxed antialiased"
                                    style={{ color: donatedCard.text_color }}>
                                    {donatedCard.title}
                                </p>

                                <p
                                    className="text-md md:text-xl font-semibold"
                                    style={{ color: donatedCard.text_color }}>
                                    <span>$</span> {donatedCard.price}
                                </p>
                                <a className="inline-block" href="#">
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-2 px-4 sm:py-3 sm:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold"
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
                <div className="flex justify-center mt-5">
                    {" "}
                    <button
                        className="py-2 px-4 rounded-md bg-blue-500 text-white font-semibold"
                        onClick={handleSeeAllClick}>
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donation;
