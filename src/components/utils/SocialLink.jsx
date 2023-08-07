/* eslint-disable react/prop-types */

const SocialLink = ({ icon }) => {
  return (
   <>
      <img
        src={icon}
        alt="icon/social"
        className="flex items-center cursor-pointer md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-6 xs:h-6 w-5 h-5
          transition-all duration-500 hover:scale-110"
      />
   </>
  )
}

export default SocialLink