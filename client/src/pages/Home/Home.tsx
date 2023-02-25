import deer from "../../assets/images/deer.jpg"
import Navbar from "../../layout/Navbar/Navbar";

const destinations = [
    {
        name: "Sundarbans",
    },
    {
        name: "Bandarban",
    },
    {
        name: "Saint Martin",
    },
];

const Home = () => {
    return (
        <>
            <div className="p-1">NOTICE</div>
            <Navbar />

            <div className="container h-screen  mt-6">
                <div className="bg-deer bg-cover h-5/6"></div>


                <div className="mt-6 space-y-4">
                    <span className="text-xl font-medium text-emerald-600">DESTINATIONS BASED ON ATTRACTIONS</span>
                    <div className="flex flex-row gap-5">
                        {
                            destinations.map((d) => (
                                <div className="shadow-lg">
                                    <img src={deer} />
                                    <span>{d.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <span className="text-xl font-medium text-emerald-600">DESTINATIONS BASED ON ACTIVITIES</span>
                    <div className="flex flex-row gap-5">
                        {
                            destinations.map((d) => (
                                <div className="shadow-lg">
                                    <img src={deer} />
                                    <span>{d.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-row h-80 mt-6">
                    <div className="flex-1">About us</div>
                    <div className="flex-1 bg-deer bg-cover h-full">Image</div>
                </div>

                <div className="mt-6 space-y-4">
                    <span className="text-xl font-medium text-emerald-600">TRAVEL STORIES FROM TRAVEL LOVERS</span>
                    <div className="flex flex-row gap-5">
                        {
                            destinations.map((d) => (
                                <div className="shadow-lg">
                                    <img src={deer} />
                                    <span>{d.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-6">Footer</div>
            </div>
        </>

    );
};

export default Home;
