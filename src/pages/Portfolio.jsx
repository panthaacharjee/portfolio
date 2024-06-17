import { useNavigate } from "react-router-dom"

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


const Portfolio = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto mb-10">
            
                <div  >
                    <div className="flex flex-col md:flex-row mx-auto w-11/12 md:w-full">
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={one} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={three} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={five} className="rounded-lg h-80 w-full" />
                            
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto w-11/12 md:w-full md:mt-2">
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={seven} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={ten} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={eight} className="rounded-lg h-80 w-full" />
                            
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto w-11/12 md:w-full md:mt-2">
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={eleven} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={tweleve} className="rounded-lg h-80 w-full" />
                            
                        </div>
                        <div className="w-full md:w-4/12 overlay-box rounded-sm mr-2 mt-5 md:mt-0">
                            <img src={four} className="rounded-lg h-80 w-full" />
                            
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Portfolio