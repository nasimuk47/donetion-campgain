/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const CardDetail = ({ fetchData }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
                const cardItem = data.find((item) => item.id === parseInt(id));
                if (cardItem) {
                    setCard(cardItem);
                } else {
                    setError("Card not found");
                }
            })
            .catch(() => {
                setError("Error fetching data");
            });
    }, [fetchData, id]);

    const handleDonateClick = () => {
        if (card) {
            const donatedCards =
                JSON.parse(localStorage.getItem("donatedCards")) || [];
            donatedCards.push(card);
            localStorage.setItem("donatedCards", JSON.stringify(donatedCards));

            Swal.fire({
                icon: "success",
                title: "Donation Successful",
                text: "Thank you for your donation!",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                navigate("/Donation");
            });
        }
    };

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
                <p>{error === "card pai nai"}</p>
            </div>
        );
    }

    if (!card) {
        return <div>waiting load hoche....</div>;
    }

    const { image, title, description, text_color, price } = card;

    const buttonStyle = {
        backgroundColor: text_color,
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="relative">
                <img
                    className="w-full max-w-full h-auto"
                    src={image}
                    alt={title}
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-50 flex items-center">
                    <button style={buttonStyle} onClick={handleDonateClick}>
                        Donate ${price}
                    </button>
                </div>
            </div>
            <div className="w-full mt-4 mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mt-3">
                    {title}
                </h1>
                <p className="text-md sm:text-lg md:text-xl lg:text-xl  mt-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CardDetail;
