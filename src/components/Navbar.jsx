import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';

import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/JudyHub Logo1.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);

return (
   <>
      <header className={!navState 
            ? 'absolute top-2 left-0 right-0 z-50 duration-1000' 
            : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center z-[200] blur-effect-theme duration-1000'
      }>
        <nav className='w-full flex items-center justify-between px-3 py-2'>

            <div className='flex justify-between items-center'>
                <img
                    src={logo}
                    alt="logo/img"
                    className={`xs:w-16 w-12 h-auto ${navState && "filter brightness-1"}`}
                />
                <div className="flex flex-col justify-center xs:items-center items-start xs:ml-4 ml-2">
                    <div className={`${navState ? "text-[#270404]" : "text-white title-text-shadow2"} 
                        font-poppins xs:text-[25px] text-[20px] font-semibold text-start`}>
                        Judy&apos;s Hub
                    </div>
                    <div className={`${navState ? "text-[#270404]" : "text-white title-text-shadow1"} 
                        font-poppins xs:text-[15px] text-[13px] font-semibold xs:tracking-normal tracking-wider 
                        text-start xs:-mt-2 -mt-1 xs:ml-0 ml-1`}>
                        Beyoutiful
                    </div>
                </div>
            </div>

            <ul className='flex items-center justify-center gap-3'>

                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style 
                        ${navState && "text-[#270404] transition-all duration-300"}`} />
                </li>

                <li className='grid items-center'>
                    <HeartIcon className={`icon-style 
                        ${navState && "text-[#270404] transition-all duration-300"}`} />
                </li>

                <li className='grid items-center'>
                    <button type='button' onClick={onCartToggle} 
                        className='border-none outline-none active:scale-110 transition-all duration-300 relative'>

                        <ShoppingBagIcon 
                            className={`icon-style 
                                ${navState && "text-[#270404] transition-all duration-300"}`} />

                        <div className={`absolute top-4 right-0 shadow sm:w-5 sm:h-5 w-4 h-4 
                            text-[10px] leading-tight text-center
                            font-medium rounded-full flex items-center justify-center cursor-pointer 
                            hover:scale-110 transition-all duration-300 
                            ${navState 
                            ? 'bg-[#270404] text-slate-100 shadow-[#270404]' 
                            : 'bg-slate-100 text-[#270404] shadow-slate-100'}`}>{totalQTY}</div>
                    </button>
                </li>

            </ul>
        </nav>
      </header>
   </>
  )
}

export default Navbar