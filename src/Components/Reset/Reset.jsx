import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../Provider/AuthProvider";



const Reset = () => {
    const {email, resetEmail , setEmail} =useContext(AuthContext);
    

    const handleReset=(e)=>{
        e.preventDefault();
        const Email =email;
         resetEmail(Email)
         .then(()=>{
            console.log('resubmitted')
            window.location.href = 'https://mail.google.com/';
         })
            
            
        
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex justify-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleReset} className="btn btn-primary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;