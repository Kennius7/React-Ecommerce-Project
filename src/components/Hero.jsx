/* eslint-disable react/prop-types */
// import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import { PropTypes } from "prop-types";




// eslint-disable-next-line no-unused-vars
const Hero = ({ heroapi: { title, subtitle, btntext, videos, sociallinks, img } }) => {
//   console.log(heroapi);
  return (
   <>
      <div className='relative h-auto w-auto flex flex-col'>

        <div className='bg-theme md:clip-path xs:clip-path1 clip-path2 md:h-[70vh] 
          sm:h-[30vh] xs:h-[40vh] xxs:h-[38vh] h-[42vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'>
        </div>

        <div className='relative opacity-100 z-20 grid items-center justify-items-center mt-12'>

          <div className='grid items-center xs:justify-items-center justify-items-start md:mt-14 
            sm:mt-20 xs:mt-10 mt-12'>

            <h1 className='w-full md:text-[40px] sm:text-[42px] xs:text-[28px] xxs:text-[20px] text-[18px]
              font-extrabold filter drop-shadow-sm text-slate-200 xs:text-center text-start
              md:tracking-normal sm:-tracking-[1px] xs:-tracking-[1px] tracking-normal xs:pl-0 pl-2'>
              {title}
            </h1>

            <h1 className='md:w-full sm:w-[68%] xxs:w-[75%] w-[80%] md:text-[25px] sm:text-[28px] xs:text-[19px] 
              xxs:text-[17px] text-[14px] font-semibold xs:text-center text-start 
              sm:mt-4 xs:mt-0 xxs:mt-3 mt-1 filter 
              drop-shadow-sm text-slate-200 md:leading-0 sm:leading-8 xxs:leading-6 leading-5 
              md:tracking-normal sm:-tracking-[2px] -tracking-[1px] xs:pl-0 pl-2'>
              {subtitle}
            </h1>

            <button type='button' 
              className='button-theme bg-slate-200 shadow-[#270404] rounded-xl my-5 xs:ml-0 ml-2
                md:mt-10 sm:mt-6 xs:mt-2 mt-3 sm:text-[14px] xs:text-[12px] xxs:text-[11px] text-[9px] 
                xxs:font-normal font-semibold text-[#270404]'>
                {btntext}
            </button>

            {/* <div className='grid items-center gap-5 md:gap-3 absolute md:top-[20vh] sm:top-[10vh] 
                md:left-[4%] sm:left-[2%] w-auto h-auto'>
                {videos?.map((val, i) => (
                    <Clips
                      key={i}
                      imgsrc={val.imgsrc}
                      clip={val.clip}
                    />
                ))}
            </div> */}

            <div className='grid items-center absolute md:top-[10vh] sm:top-[8vh] xs:top-[9vh] top-[8vh] 
              md:right-[2%] sm:right-[2%] xs:right-[1%] right-[1%] md:gap-4 sm:gap-3 xxs:gap-2 gap-2'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>

          </div>

          {/* <div className='flex items-center'>
            <img
              src={img}
              alt='hero-img/img'
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] 
                transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill mt-10"
            />
          </div> */}

        </div>

      </div>
   </>
  )
}

Hero.prototype = {
    heroapi: PropTypes.object,
    // title: PropTypes.string,
    // subtitle: PropTypes.string,
    // btntext: PropTypes.string,
    // img: PropTypes.string,
    // sociallinks: PropTypes.array,
    // videos: PropTypes.array,
}

export default Hero