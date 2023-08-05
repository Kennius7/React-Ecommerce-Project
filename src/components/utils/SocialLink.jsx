/* eslint-disable react/prop-types */

const SocialLink = ({ icon }) => {
  return (
   <>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:w-8 md:h-8 sm:w-5 sm:h-5 
          transition-all duration-500 hover:scale-110"
      />
   </>
  )
}

export default SocialLink