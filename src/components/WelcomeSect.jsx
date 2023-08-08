import judypics1 from "../assets/judypics1.png";
import judypics2 from "../assets/judypics2.png";


const WelcomeSect = () => {
  return (
    <>
        <div className="flex xs:flex-row flex-col-reverse justify-center items-center w-full 
            xxs:h-[500px] h-[600px]">

            <div className="flex flex-col justify-center items-start sm:w-[60%] xs:w-[54%] w-[98%] 
                xxs:mt-0 mt-3">
                <div className="md:w-[88%] sm:w-[80%] w-[90%]">
                    <h1 className="sm:font-extrabold font-bold md:text-[38px] sm:text-[30px] 
                        xs:text-[25px] xxs:text-[22px] text-[20px] text-[#270404]">
                        Welcome to Our Skincare Page&nbsp;
                        <br className="hidden md:block"/> 
                        for Nigerian Women
                    </h1>
                </div>
                <div className="md:w-[70%] sm:w-[85%] xs:w-[90%] w-[98%] xs:mt-6 mt-2">
                    <p className="xs:font-semibold font-normal font-poppins md:text-[25px] sm:text-[22px] 
                        xxs:text-[18px] text-[16px] text-[#270404]">
                        Discover the best beauty products for your skin type and achieve
                        radiant, healthy-looking skin. Our curated selection of skincare products
                        is tailored to address the unique needs of Nigerian women. Browse our
                        collection and get ready to glow!
                    </p>
                </div>
            </div>

            <div className="flex justify-around items-center sm:w-[35%] xs:w-[44%] w-[98%] xs:h-[80%] h-[50%] 
                xs:mt-0 mt-[10px]">
                <div className="w-[49%] h-full overflow-hidden">
                    <img src={judypics1} alt="welcome pics" 
                        className="object-cover xs:w-[600px] xs:h-[600px] w-[400px] h-[400px]"/>
                </div>
                <div className="w-[49%] h-full overflow-hidden">
                    <img src={judypics2} alt="welcome pics" 
                        className="object-cover xs:w-[600px] xs:h-[600px] w-[400px] h-[400px]"/>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default WelcomeSect