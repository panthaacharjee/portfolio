import { BsFacebook } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative ">
        <div className="inline-flex absolute ml-11 " style={{marginTop:'-15px'}}>
            <li className="text-2xl text-white mr-2 hover:rotate-180"><Link><BsFacebook/></Link></li>
            <li className="text-2xl text-white mr-2 hover:rotate-180"><Link to="https://wa.me/01863795725" target="_blank"><FaWhatsapp/></Link></li>
            <li className="text-2xl text-white mr-2 hover:rotate-180"><Link to="https://github.com/panthaacharjee" target="_blank"><IoLogoGithub/></Link></li>
            <li className="text-2xl text-white mr-2 hover:rotate-180"><Link><FaLinkedin/></Link></li>
            <li className="text-2xl text-white mr-2 hover:rotate-180"><Link to="https://t.me/pantha3519" target="_blank"><FaTelegram/></Link></li>
        </div>
        <div className="bg-zinc-600 text-white flex items-center justify-center py-1 h-32">
            <p className="text-xl lg:text-3xl md:text-2xl   font-mont text-yellow-400">''Thanks For Scrolling''</p>
        </div>
        <div className="bg-zinc-500 text-white text-center py-1 font-mont text-sm lg:text-md">
            copyright@2024-Pantha Acharjee
        </div>
    </div>
  )
}

export default Footer