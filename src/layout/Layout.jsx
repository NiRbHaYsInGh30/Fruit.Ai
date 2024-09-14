import { Outlet } from "react-router";

import Navbar from '../ui/Navbar'

const Layout =()=> {
  return (
    <div>
      <main> 
       <Navbar/>
      <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
