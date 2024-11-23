import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Adventure from '../Adventure/Adventure';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
const Wishlist = () => {
    const {wished}=useContext(AuthContext)
    const totalData = useLoaderData();
    const selectedData = totalData.filter(data =>wished.includes(data.ID))
    console.log(selectedData);
    return (
        <div>
            <NavBar></NavBar>
           <h2>This total selected Items {selectedData.length}</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 mb-5'>
              {
               selectedData&&  selectedData.map(data=><Adventure adventure={data} key={data.ID}></Adventure>)
              }
           </div>

           <Footer></Footer>
        </div>
    );
};

export default Wishlist;