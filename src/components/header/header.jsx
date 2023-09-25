const header = () => {
    return (
        <div>
            <header>
                <div
                    className="h-96 mt-2 "
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png)",
                    }}>
                    <div className="hero-overlay bg-opacity-200 bg-[#FFFFFFF2] flex justify-center items-center ">
                        <div>
                            <div>
                                <h1 className=" text-5xl font-bold ">
                                    I Grow By Helping People In Need
                                </h1>
                            </div>
                            <div className="flex justify-center items-center gap-2 mt-5">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Type here..."
                                        className=" w-96 h-12  rounded-md bg-slate-50 input-bordered  "
                                    />
                                </div>

                                <button className="w-28 h-12 bg-[#FF444A] rounded-md  ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default header;
