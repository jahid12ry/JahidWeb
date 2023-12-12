

const About = () => {
    return (
        <div className="pb-24">
            <div className="text-center text-4xl font-bold  text-white underline py-4">
                <h1 className="mt-12">About Me</h1>
            </div>

            <div className="p-2">
                <div className="lg:absolute w-80 lg:w-[300px] lg:ml-[480px] shadow-xl">
                    <img src="https://i.ibb.co/30rNSG7/ea6bb14b-90ec-4429-a9a7-dc680d8abb40.jpg " alt="" />
                </div>
                <div className="relative lg:top-64 grid md:grid-cols-2 lg:ml-44">
                    <div className="w-[300px] lg:ml-24">
                        <img src=" https://i.ibb.co/zh5H17B/ff8e69b1-17c4-410e-bf13-a02afa7478cd.jpg" alt="" />
                    </div>
                    <div className="w-[300px] lg:ml-[-15px]">
                        <img src="https://i.ibb.co/4Rd7kjK/53acb86b-8a8c-48ae-9709-bcab10fc4a5c.jpg" alt="" />
                    </div>
                </div>

                <div className=" bg-white lg:w-96 p-6 lg:ml-[435px] text-center m-4 opacity-80 text-yellow-600 rounded-btn">

                    <h1 className="text-3xl font-bold"><span className="text-red-600">Hi</span> , I am <span className="text-red-600">Jahid Hassan</span></h1>
                    <h1 className="py-6 text-black font-extrabold ">I Love to Develop New Websites. My Main Goal is Learn more Coding and invent unique website design.</h1>
                </div>

            </div>
        </div>
    );
};

export default About;