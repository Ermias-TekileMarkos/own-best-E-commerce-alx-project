import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { arrowDown } from "../assets/icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Ham({ isOpen, setIsOpen }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
    
      className={`absolute left-0
         bg-slate-50 w-full shadow-lg
        ${!isOpen ? "hidden" : ""}`}
    >
      <div className="flex flex-col items-center mb-[40px]">
        <ul
        data-aos="fade-right"
        className="flex flex-col items-center">
          {navLinks.map((item, index) => (
            <li key={index} className="mb-10">
              <button onClick={()=>setIsOpen(!isOpen)}><Link
                to={item.path}
                className="font-montserrat text-lg text-slate-gray hover:underline   hover:underline-offset-[25px]
            transition delay-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
            focus:-translate-y-1 focus:scale-110 focus:bg-indigo-100 hover:shadow-sm z-auto "
              >
                {item.title}
              </Link></button>
              
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-center">
          <img
            src={arrowDown}
            alt="topcloth"
            width={40}
            height={40}
            className="border-2 rounded-full p-2 bg-sky-200 mt-6 rotate-90 animate-bounce "
          />
        </div>
      </div>
    </div>
  );
}

export default Ham;
