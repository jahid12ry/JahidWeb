

const MySkills = () => {
    return (
        <div>
            <div className="text-center text-4xl font-bold text-white underline">
                <h1>My Skills</h1>
            </div>
            <div className="grid md:grid-cols-5 p-12 lg:px-32 ml-[54px]">
                <div className="w-32">
                    <img src="https://i.ibb.co/yRNcTtQ/java-226777.png" alt="" />
                    <h1 className="text-xl font-semibold p-4 text-center text-white">JavaScript</h1>
                </div>
                <div className="w-32">
                    <img src="https://i.ibb.co/QMjMsF7/html-1051277.png" alt="" />
                    <h1 className="text-xl font-semibold p-4 text-center text-white">Html 5</h1>
                </div>
                <div className="w-32">
                    <img src="https://i.ibb.co/DWRcSmF/css-3-732190.png" alt="" />
                    <h1 className="text-xl font-semibold p-4 text-center text-white">CSS 3</h1>
                </div>
                <div className="w-32">
                    <img src="https://i.ibb.co/MV6v1Qx/atom-1530177.png" alt="" />
                    <h1 className="text-xl font-semibold p-4 text-center text-white">ReactJs</h1>
                </div>
                <div className="w-32">
                    <img src="https://i.ibb.co/LrLf0mT/database-6047836.png" alt="" />
                    <h1 className="text-xl font-semibold p-4 text-center text-white">MongoDB</h1>
                </div>
            </div>

        </div>
    );
};

export default MySkills;