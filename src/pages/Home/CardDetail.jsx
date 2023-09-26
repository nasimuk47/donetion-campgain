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
        return <div>Load hocce</div>;
    }

    const { image, title, description, category_color, price } = card;

    const buttonStyle = {
        backgroundColor: category_color,
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return (
        <div className="mt-5">
            <div className="relative">
                <img className="w-9/12 h-96 mx-auto" src={image} alt="" />
                <div className="absolute top-80 left-40 p-4">
                    <button style={buttonStyle} onClick={handleDonateClick}>
                        Donate ${price}
                    </button>
                </div>
            </div>
            <div className="w-9/12 mx-auto">
                <h1 className="text-3xl font-bold mt-3">{title}</h1>
                <p className="text-md font-semibold mt-3">{description}</p>
            </div>
        </div>
    );
};

export default CardDetail;
