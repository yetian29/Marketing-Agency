

const OurAchievements = () => {
    return(

    <div className="bg-white">
      <div className="mx-auto w-full py-24 px-4  lg:px-[54px]">
        <h1 className="text-4xl text-black font-medium">Our Achievements</h1>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 mt-10">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img src="/images/about/behance.svg" className="w-1/2 h-auto"/>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img src="/images/about/clutch.svg" className="w-1/2 h-auto"/>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img src="/images/about/dribbble.svg" className="w-1/2 h-auto"/>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img src="/images/about/clutch.svg" className="w-1/2 h-auto"/>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img src="/images/about/verified.svg" className="lg:w-1/2 h-auto w-1/4"/>
          </div>
        </div>
      </div>
    </div>
                 
    )
}
export default OurAchievements;
