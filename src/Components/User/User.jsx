import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../Provider/AuthProvider";


const User = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="max-w-6xl mx-auto bg-[#E7E7E7]">
            <NavBar></NavBar>
           

            <div className=" bg-base-100 w-1/2 mx-auto shadow-xl p-5 ">
               
                    <img
                        src={user.photoURL}
                        alt="Shoes" className="w-24 rounded-full" />
               
                  <div className="">
                    <h2 className="text-left my-1 text-xl font-bold">
                        {user.displayName}
                       
                    </h2>
                  <h2 className="text-left">{user.email}</h2>
                    
                </div>
            </div>
        </div>
    );

};

export default User;