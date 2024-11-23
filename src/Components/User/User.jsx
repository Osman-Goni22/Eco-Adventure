import { useContext  } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import Footer from "../Footer/Footer";

const User = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="max-w-6xl mx-auto  py-10">
            <NavBar></NavBar>

            <PageTitle></PageTitle>

            <div className=" bg-base-100 md:w-2/3 lg:1/2 mx-auto shadow-xl p-5 mt-5 ">

                <h2 className="text-lg font-bold">{`Hi ${user.displayName}, Welcome to this website`}</h2>

                <img
                    src={user.photoURL}
                    alt="Shoes" className="w-24 rounded-full" />

                <div className=" md:flex justify-between">
                    <div className="mb-3">
                        <h2 className="text-left my-1 text-xl font-bold">
                            Name: {user.displayName}

                        </h2>
                        <h2 className="text-left">Email: {user.email}</h2>
                    </div>

                    <Link to='/update' className="btn">Update Profile</Link>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default User;