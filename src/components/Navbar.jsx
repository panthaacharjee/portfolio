import { Link } from "react-router-dom";
import { IoLogoFoursquare} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState();

  const controlNavbar = () => {
    if (window.scrollY > 500) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>{!show ? <div className=" text-white py-5 pl-5 md:pl-0  fixed w-full z-50" style={{backgroundColor:"#010c247e"}} >
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <Link to="/" className="text-4xl cursor-pointer"><IoLogoFoursquare/></Link>
      </div>
      <div className="flex ">
        <div className="inline-flex md:mr-10 mr-0">
        {/* <li className="text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/">Home</Link></li> */}
          <li className="text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/portfolio">Portfolio</Link></li>
          <li className="text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/contact">Contact</Link></li>
        </div>
        <div className="lg:flex md:hidden sm:hidden hidden items-center">
          <input type="text" placeholder="Search...." className="py-1 px-3 text-yellow-500 rounded-l-full"/>
          <button className="h-8 bg-white text-black px-4 rounded-r-full"><FaSearch/></button>
        </div>
      </div>
    </div>
  </div>:<div className=" text-white py-5 pl-5 md:pl-0 " >
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <Link to="/" className="text-4xl cursor-pointer"><IoLogoFoursquare/></Link>
      </div>
      <div className="flex">
        <div className="inline-flex md:mr-10 mr-0">
        {/* <li className="text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/">Home</Link></li> */}
          <li className="text-sm md:text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/portfolio">Portfolio</Link></li>
          <li className="text-sm md:text-lg mr-4 font-mont font-bold hover:text-yellow-500"><Link to="/contact">Contact</Link></li>
        </div>
        <div className="lg:flex md:hidden sm:hidden hidden items-center">
          <input type="text" placeholder="Search...." className="py-1 px-3 text-yellow-500 rounded-l-full"/>
          <button className="h-8 bg-white text-black px-4 rounded-r-full"><FaSearch/></button>
        </div>
      </div>
    </div>
  </div>}</>
  )
}

export default Navbar