/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react'

// const Footer = ({ footerAPI: { titles, links } }) => {
//   const [Year, setYear] = useState();

//   useEffect(() => {
//       const getYear = () => setYear(new Date().getFullYear());
//       getYear();
//   }, []);


//   return (
//    <>
//       <footer className='bg-theme-footer pt-7 pb-5'>

//         <div className='nike-container text-slate-200'>

//           <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
//             {titles.map((val, i) => (
//               <div key={i} className="grid items-center">
//                 <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
//               </div>
//             ))}
//             {links.map((list, i) => (
//               <ul key={i} className="grid items-center gap-1">
//                 {list.map((link, i) => (
//                   <li key={i} className="text-sm sm:text-xs">{link.link}</li>
//                 ))}
//               </ul>
//             ))}
//           </div>

//           <div className='mt-5 text-center'>
//             <p className='text-sm md:text-center'>
//               Copyright
//               <sup className='text-base font-bold'>&copy;</sup>
//                 All Reserved Rights 
//                 <span className='font-semibold'>
//                   &nbsp;JUDY&apos;S HUB {Year}
//                 </span>
//             </p>
//           </div>

//         </div>

//       </footer>
//    </>
//   )
// }

// export default Footer




import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedInIcon from "../assets/Mlinkedin.svg";
// import whatsappIcon from "../assets/Shield.svg";
import youtubeIcon from "../assets/youtube.svg";
import phoneIcon from "../assets/phone-icons-white.png";
import emailIcon from "../assets/email-icons-white.png";
import { NavContext } from "../components/context/NavContext";



function Footer() {

    const Navigate = useNavigate();
    const { navLinks, setActive } = useContext(NavContext);

    return (
        <footer className="w-full flex justify-center items-center bg-[#011402]">

            <div className="w-full flex flex-col xs:justify-center justify-start items-center pt-6 px-4 
                xs:px-4 sm:px-10 md:px-10">

                <div className="w-full flex justify-start">
                    <div className="w-full flex flex-row justify-between items-start ss:mb-8 ss:mt-12 sm:mt-4">

                        <div className="xs:flex hidden flex-col xs:max-w-[180px] sm:max-w-[300px] 
                            md:max-w-[300px]">
                            <Link to="/">
                                <div className={`text-gray-400 font-bold md:text-[16px] sm:text-[25px] 
                                    xs:text-[17px] text-[16px] xs:mb-2 sm:mb-4`}>Judy&apos;s
                                    <span className={`text-green-500 ss:mb-8`}>&nbsp;Hub</span>
                                </div>
                            </Link>
                            <p className={`w-full text-gray-400 leading-[25px] xs:leading-[22px] 
                                sm:leading-[26px] text-[14px] xs:text-[13px] sm:text-[20px] md:text-[15px]`}>
                                Discover the best beauty products for you and achieve
                                radiant, healthy-looking skin. Our curated selection of skincare products
                                is tailored to address the unique needs of Nigerian women. Browse our
                                collection and get ready to glow!
                            </p>
                        </div>

                        <div className="flex flex-col max-w-[140px] xs:max-w-[180px] sm:max-w-[300px] 
                            md:max-w-[400px]">
                            <h2 className={`text-gray-400 font-bold text-[16px] xs:text-[17px] 
                                sm:text-[25px] md:text-[16px] mb-2 xs:mb-2 sm:mb-4`}>Information</h2>
                            <ul className="list-unstyled flex flex-col text-gray-400 sm:text-[20px] 
                                text-[14px] xs:text-[13px] md:text-[15px]">

                                <li onClick={() => { setActive(navLinks[1].title); Navigate(navLinks[1].id) }} 
                                    className="cursor-pointer mb-0 xs:mb-1 sm:mb-1 md:mb-1">About Us</li>

                                <li onClick={() => { setActive(navLinks[3].title); Navigate(navLinks[2].id) }} 
                                    className="cursor-pointer mb-0 xs:mb-1 sm:mb-1 md:mb-1">Our Products</li>

                                <li onClick={() => { setActive(navLinks[3].title); Navigate(navLinks[3].id) }} 
                                    className="cursor-pointer mb-0 xs:mb-1 sm:mb-1 md:mb-1">Our Blog</li>

                                <li onClick={() => { setActive(navLinks[5].title); Navigate(navLinks[5].id) }} 
                                    className="cursor-pointer mb-0 xs:mb-1 sm:mb-1 md:mb-1">Contact Us</li>

                                <li className="cursor-pointer mb-0 xs:mb-1 sm:mb-1 md:mb-1 xs:tracking-normal 
                                    tracking-[-1px]">Privacy &amp; Cookies Policy</li>
                            </ul>
                        </div>

                        <div className={`flex flex-col justify-start max-w-[180px] xs:max-w-[180px] 
                            sm:max-w-[300px] md:max-w-[400px]`}>
                            <h2 className={`text-gray-400 font-bold sm:mb-6 xs:mb-4 mb-3 sm:text-[25px] 
                            xs:text-[17px] md:text-[16px] text-[16px]`}>Have Questions?</h2>

                            <ul className="w-full text-gray-400 flex flex-1 flex-col justify-start">
                                <li className="sm:mb-2 ss:mb-4">
                                    <a href="https://wa.me/+2349055570782" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="sm:mb-0 mb-2 flex flex-row justify-start items-center">
                                        <img src={phoneIcon} alt="phone" 
                                            className="w-[15px] h-[15px] ss:w-[20px] ss:h-[20px] sm:mr-2 mr-1"/>
                                        <span className="md:text-[15px] sm:text-[20px] xs:text-[13px] 
                                            text-[14px]">+2349055570782</span>
                                    </a>
                                </li>
                                <li className="sm:mb-2 ss:mb-2">
                                    <a href="mailto:admin@maticdrive.com" 
                                        className="flex flex-row justify-start items-center">
                                        <img src={emailIcon} alt="email" 
                                            className="w-[15px] h-[15px] ss:w-[20px] ss:h-[20px] sm:mr-2 mr-1"/>
                                        <span className={`md:text-[15px] sm:text-[20px] xs:text-[13px] 
                                            text-[15px] tracking-[-1px] xs:tracking-[0px]`}>
                                            admin@judyshub.com
                                        </span>
                                    </a>
                                </li>

                                <ul className="xs:flex hidden flex-row justify-around items-center mt-4 xs:mt-2 sm:mt-1">
                                    <li>
                                        <a href="https://www.facebook.com" 
                                            target="_blank" rel="noreferrer">
                                            <img src={facebookIcon} alt="FB" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/maticdrive1?s=11&t=7_0FyjTgyXMQm84ZH0Psfw" 
                                            target="_blank" rel="noreferrer">
                                            <img src={twitterIcon} alt="Tw" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" 
                                            target="_blank" rel="noreferrer">
                                            <img src={instagramIcon} alt="IG" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/maticdrive" 
                                            target="_blank" rel="noreferrer">
                                            <img src={linkedInIcon} alt="In" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/@maticdrive" 
                                            target="_blank" rel="noreferrer">
                                            <img src={youtubeIcon} alt="Yt" 
                                                className="w-[30px] h-[40px] sm:w-[40px] sm:h-[45px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                </ul>
                            </ul>

                        </div>

                    </div>
                </div>

                <div className="w-full flex flex-col justify-start">
                    <ul className="xs:hidden flex flex-row justify-start items-center mt-6 mb-2 w-full">
                        <li className="mr-4"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="FB" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://twitter.com/maticdrive1?s=11&t=7_0FyjTgyXMQm84ZH0Psfw" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Tw" className="w-[30px] h-[30px]" /></a></li>
                        {/* <li className=""><a href="https://wa.me/+2349055570782" target="_blank" rel="noreferrer"><img src={whatsappIcon} alt="Wh" className="icon-whatsapp" /></a></li> */}
                        <li className="mr-4"><a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="IG" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://www.linkedin.com/company/maticdrive" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="In" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://youtube.com/@maticdrive" target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="Yt" className="w-[30px] h-[30px]" /></a></li>
                    </ul>

                    <div className="w-full flex xs:justify-center justify-start mb-2 xs:mb-2 sm:mb-6 md:mb-3 
                        -mt-1 xs:mt-6 sm:mt-4 md:mt-1">
                        <div className="w-[300px] xs:w-[400px] sm:w-[600px] text-gray-400 text-start 
                            xs:text-center text-[14px] xs:text-[14px] sm:text-[22px] md:text-[16px]">
                            Copyright &copy; All rights reserved | Judy&apos;s Hub.
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer


