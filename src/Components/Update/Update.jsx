import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../NavBar/NavBar';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Update = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    const handleUpdate=(e)=>{
        e.preventDefault();
       const name=e.target.name.value;
       const photo = e.target.photo.value;
       console.log(name, photo);
       const updatedUserData={
        displayName:name,
        photoURL:photo
       }

       updateUserProfile(updatedUserData)
       .then(result=>{
         toast('Updated user successfully')
       })

       .catch(err=>console.log(err.message))
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input name='photo' type="text" placeholder="Photo-URL" className="input input-bordered" required />
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Update;