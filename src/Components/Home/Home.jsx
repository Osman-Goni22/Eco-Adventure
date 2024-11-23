import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Banner></Banner>
            <h2 className="text-xl font-bold text-center py-5
            ">Adventure Experiences</h2>
            <section className=" md:grid grid-cols-12 flex flex-col">
                <aside className="col-span-3">
                  <LeftNavBar></LeftNavBar>
                </aside>
                <main  className="col-span-9">
                  <Outlet></Outlet>
                </main>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;