import { Link, useNavigate } from "react-router-dom"
import {motion} from "framer-motion"


import {IoMdMail} from "react-icons/io"
import { IoLocation } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";

import react  from "../assets/react.png"
import mongodb from "../assets/mongodb.png"
import git from "../assets/github.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import vps from "../assets/vps.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import aws from "../assets/aws.png"
import js from "../assets/js.png"
import redux from "../assets/redux.png"
import sql from "../assets/sql.png"


import one from "../assets/Project/1.png"
import two from "../assets/Project/2.png"
import three from "../assets/Project/3.png"
import four from "../assets/Project/4.png"
import five from "../assets/Project/5.png"
import six from "../assets/Project/6.png"
import seven from "../assets/Project/7.png"
import eight from "../assets/Project/8.png"
import nine from "../assets/Project/9.png"
import ten from "../assets/Project/10.png"
import eleven from "../assets/Project/11.png"
import tweleve from "../assets/Project/12.png"


const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="">
       <div className="bg-image shadow-custom">
            <div className="container mx-auto h-[80vh] md:h-screen flex items-center justify-center ">
                <div className="text-white font-mont font-medium px-5 md:px-0">
                    <motion.p initial={{x:'100vw'}} animate={{x:0}} transition={{duration:2}}  className="text-sm md:text-2xl ">I'M <span className=" text-3xl sm:text-5xl md:text-6xl font-mont text-yellow-600 font-bold">Pantha Acharjee</span></motion.p>
                    <motion.p initial={{x:'-100vw'}} animate={{x:0}} transition={{duration:2}} className="text-xs sm:text-xl md:text-2xl  text-wrap tracking-widest mt-3">Javascript Programmer & MERN Consultant </motion.p>
                    <motion.button className="border-2 border-yellow-600 mt-5 rounded-lg text-xs md:text-md" animate={{scale:1.1, boxShadow:"0px 0px 25px 1px #636363", }} transition={{delay:0.1}}><Link className="block px-5 py-2   text-white" to='/contact'>Resume</Link></motion.button>
                </div>
            </div>
       </div>
       <div>
           <div className="container mx-auto px-10 py-20 text-white font-mont">
                <p className="text-2xl md:text-4xl font-bold ">About</p>
                <div className="flex flex-col md:flex-row mt-5 ml-5">
                    <p className="hidden md:block">_________</p>
                    <p className="text-xl ml-5">Experienced Full Stack Developer with over 3 years of experience in MERN Technology. Proficient in <span className=" text-yellow-400">JavaScript(ES6) features, asynchronous programming, and functional programming</span> concepts. Expertise in Third Party API, Google API, Payment API and others Application Programming Interfaces. Recently I complete graduation in Computer Science and Technology. Known for excellent communication skills.</p>
                </div>
            </div> 
       </div>
       <div>
        <div className="container mx-auto mb-5">
            <p className="text-white font-mont text-2xl md:text-4xl font-semibold text-center">My Skills</p>
            <div style={{width:"90%", margin:"0px auto", marginTop:"50px"}}>
                <div className="flex flex-col md:flex-row">
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={js} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Javascript</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={node} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Nodejs</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={git} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Git Source Control</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={mongodb} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">MongoDB</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-0 md:mt-5">
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={redux} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Redux JS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={aws} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">AWS Server Service</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={react} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">React JS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={vps} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">VPS Hosting Service</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-0 md:mt-5">
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={html} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Html</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={css} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">CSS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={tailwind} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Tailwind CSS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-orange-400  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={sql} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">MySQL</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="mt-20">
            <div className="container mx-auto">
                <p className="font-mont text-2xl md:text-4xl text-white text-center font-bold">Portfolio</p>
                <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:2}} className="mt-20">
                    <div className="flex flex-col md:flex-row mx-auto w-11/12 md:w-full">
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2">
                            <img src={one} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-10/12 text-center">
                                    <p className="text-2xl font-mont text-gray-200 font-bold">Devforum Project</p>
                                    <p className="font-mont text-xs font-semibold text-white mt-2">Devforum is a recruiting-based website for job and project. Here, the Developer can find their needed job and project. They can post their idea and problems for other developers. Recruiter finds the best developer for his job or project.  </p>
                                    <button className=" bg-slate-400 rounded-md px-5 py-1 text-white font-mont text-xs font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 md:mt-0 mt-5">
                            <img src={three} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-10/12 text-center">
                                    <p className="text-2xl font-mont text-gray-200 font-bold">Travel Agency</p>
                                    <p className="font-mont text-xs font-semibold text-white mt-2">This website is a travel-based website for travelers. User can find their best travel package or individual destination. User can choose their vehicle for travel. This project is a static design build with react technology.  </p>
                                    <button className=" bg-slate-400 rounded-md px-5 py-1 text-white font-mont text-xs font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 md:mt-0 mt-5">
                            <img src={five} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-10/12 text-center">
                                    <p className="text-2xl font-mont text-gray-200 font-bold">Hyper Voult Erp Project</p>
                                    <p className="font-mont text-xs font-semibold text-white mt-2">This website is a travel-based website for travelers. User can find their best travel package or individual destination. User can choose their vehicle for travel. This project is a static design build with react technology.  </p>
                                    <button className=" bg-slate-400 rounded-md px-5 py-1 text-white font-mont text-xs font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto w-11/12 md:w-full mt-0 md:mt-2">
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={seven} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-8/12 text-center">
                                    <p className="text-2xl font-mont text-white font-bold">Devforum Project</p>
                                    <p className="font-mont text-sm font-semibold text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita temporibus explicabo et perferendis. Vero unde neque, rerum ea nisi quas, </p>
                                    <button className=" bg-yellow-500 rounded-xl px-3 py-1 text-white font-mont font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={ten} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-8/12 text-center">
                                    <p className="text-2xl font-mont text-white font-bold">Devforum Project</p>
                                    <p className="font-mont text-sm font-semibold text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita temporibus explicabo et perferendis. Vero unde neque, rerum ea nisi quas, </p>
                                    <button className=" bg-yellow-500 rounded-xl px-3 py-1 text-white font-mont font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={eight} className="rounded-lg h-80 w-full" />
                            <div className="overlay">
                                <div className="w-8/12 text-center">
                                    <p className="text-2xl font-mont text-white font-bold">Devforum Project</p>
                                    <p className="font-mont text-sm font-semibold text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita temporibus explicabo et perferendis. Vero unde neque, rerum ea nisi quas, </p>
                                    <button className=" bg-yellow-500 rounded-xl px-3 py-1 text-white font-mont font-light mt-5" onClick={()=>navigate("/portfolio")}>See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div>
                    <button onClick={()=>navigate("/portfolio")} className="mx-auto block bg-yellow-600 px-5 py-2 mt-5 rounded-lg text-gray-50 font-mont font-semibold">Show More</button>
                </div>
            </div>

       </div>

        {/* Experience */}
        <div className="mt-20">
            <div className="mx-auto md:w-7/12 w-11/12">
                <p className="text-2xl md:text-4xl font-mont font-bold text-white text-center">Experience</p>
                <div className="mt-20">
                    
                    <div className="flex items-center">
                        <div className=" bg-slate-600 px-5 py-1 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl">
                            <p className="font-mont text-white font-medium">2023</p>
                        </div>
                        <div className="bg-yellow-500 h-5 w-5 rounded-full ml-3" style={{boxShadow:"0px 1px 15px 2px yellow"}}></div>
                        <p className=" ml-5 md:ml-12 font-mont text-white text-xl">Dev Fourm</p>
                    </div>
                    <div className="mt-1 ml-24  border-l-4  border-gray-500 pl-7 md:pl-14 pb-10">
                        <p className="ml-1 font-mont text-white text-sm ">MERN PROJECT ( <Link className="text-sm font-mont text-yellow-300 hover:text-yellow-500" to="https://proconnect-x-fontend.vercel.app" target="_blank">Live Link</Link> )</p>
                       <div className="text-white text-xs mt-5 ml-1 font-mont">
                         <li className=" list-disc mt-1">Working with the Gmail API (oauth2.0)</li>
                         <li className=" list-disc mt-1">Working with the MongoDB Atlas and Mongoose Package Module</li>
                       </div>
                    </div>
                    <div className="flex items-center">
                        <div className=" bg-slate-600 px-5 py-1 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl">
                            <p className="font-mont text-white font-medium">2023</p>
                        </div>
                        <div className="bg-yellow-500 h-5 w-5 rounded-full ml-3" style={{boxShadow:"0px 1px 15px 2px yellow"}}></div>
                        <p className=" ml-5 md:ml-12 font-mont text-white text-xl">Rabyea Group Project</p>
                    </div>
                    <div className="mt-1 ml-24  border-l-4 border-gray-500 pl-7 md:pl-14 pb-10">
                        <p className="ml-1 font-mont text-white text-sm ">MERN PROJECT ( <Link className="text-sm font-mont text-yellow-300 hover:text-yellow-500" to="https://erp-project-fontend.vercel.app/login" target="_blank">Live Link</Link> )</p>
                        <div className="text-white text-xs mt-5 ml-1 font-mont">
                         <li className=" list-disc mt-1">Working with multiple user accounts</li>
                         <li className=" list-disc mt-1">Working with payment API, Maps Javascript API, Google Drive API, Google Sheets API</li>
                         <li className=" list-disc mt-1">Learn HTML to PDF convert system</li>
                       </div>
                    </div>
                    <div className="flex items-center">
                        <div className=" bg-slate-600 px-5 py-1 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl">
                            <p className="font-mont text-white font-medium">2024</p>
                        </div>
                        <div className="bg-yellow-500 h-5 w-5 rounded-full ml-3" style={{boxShadow:"0px 1px 15px 2px yellow"}}></div>
                        <p className=" ml-5 md:ml-12 font-mont text-white text-xl">Education Project</p>
                    </div>
                    <div className="mt-1 ml-24  border-l-4  border-gray-500 pl-7 md:pl-14 pb-10">
                        <p className="ml-1 font-mont text-white text-sm ">MERN PROJECT ( <Link className="text-sm font-mont text-yellow-300 hover:text-yellow-500" to="https://github.com/panthaacharjee/education-final" target="_blank">Github Code</Link> )</p>
                        <div className="text-white text-xs mt-5 ml-1 font-mont">
                         <li className=" list-disc mt-1">Learn to push data from Google Sheets to MongoDB collection.</li>
                         <li className=" list-disc mt-1">Working with cloud speech-to-text API</li>
                       </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>

       <div className="py-20 mt-10 bg-gray-700 border-b-2 border-t-2 border-yellow-600">
            <p className="text-white font-mont lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center ">Contact Me</p>
            <div className="mx-auto mt-10 md:w-9/12 lg:w-8/12 w-10/12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex items-center bg-slate-800 lg:w-6/12 w-full mr-4 text-white font-mont px-3 py-2 rounded-xl">
                        <p className="text-2xl"><IoMdMail/></p>
                        <p className="text-md text-yellow-700 font-medium ml-2">panthaacharjee3519@gmail.com</p>
                    </div>
                    <div className="flex items-center bg-slate-800 lg:w-6/12 w-full text-white font-mont px-3 py-2 rounded-xl mt-5 lg:mt-0">
                        <p className="text-2xl"><FaPhoneSquareAlt/></p>
                        <p className="text-md text-yellow-700 font-medium ml-2">+880 1863795725</p>
                    </div>
                </div>
                <div className="mt-5 flex items-center bg-slate-800 lg:w-6/12 w-full mx-auto text-white font-mont px-3 py-2 rounded-xl">
                    <p className="text-2xl"><IoLocation/></p>
                    <p className="text-md text-yellow-700 font-medium ml-2">Uttara, Dhaka</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Home