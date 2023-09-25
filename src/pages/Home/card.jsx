/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const CardList = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-5 ">
            {cards.map((singleCard) => {
                const {
                    image,
                    title,
                    category,
                    card_color,

                    text_color,
                } = singleCard;

                // Define dynamic inline styles
                const cardStyles = {
                    backgroundColor: card_color,
                    color: text_color,
                };

                const categoryStyles = {
                    color: text_color,
                };

                return (
                    <div
                        className=" flex w-80 flex-col rounded-xl mt-5  "
                        style={cardStyles}
                        key={singleCard.id}>
                        <div className=" h-56  rounded-xl ">
                            <img src={image} alt="" layout="fill" />
                        </div>
                        <div className="p-6">
                            <h5
                                className=" w-16 mb-2 block font-sans text-sm font-semibold p-4"
                                style={categoryStyles}>
                                {category}
                            </h5>

                            <p className=" font-sans text-base ">{title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;
