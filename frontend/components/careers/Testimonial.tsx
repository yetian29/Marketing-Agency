const Testimonial = () => {
    return(
        <div className="mt-20">
            <div className="border-t-[2px] border-gray-200"></div>

            <div className="max-w-full bg-white px-4 lg:px-[54px] py-36 grid lg:grid-cols-2 items-center gap-10">
                <div>
                    <h1 className="text-4xl text-black font-medium mb-10">
                        We constantly try to make you <span></span>
                        <span className="text-orange-button">proud of your workpace</span>
                    </h1>
                    <p className="text-xl text-black font-base mb-16">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className="bg-orange-button px-2 py-2 text-white rounded-md w-full lg:w-52">
                        See open positions
                    </button>
                </div>
                <div className="lg:ml-80">
                    <img src="/images/careers/glassdoor.svg" className="w-full h-auto"/>

                </div>
            </div>
        </div>
    )
}
export default Testimonial;
