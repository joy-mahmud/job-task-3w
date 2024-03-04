
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Root() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>

    </div>
  );
}

export default Root;
