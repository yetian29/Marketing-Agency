
const ServiceCard2 = ({data}) => {
    return(

              <div
            onMouseEnter={ () => {
                const e = document.getElementById(data.title)
                if (e) {
                    e.classList.add("text-red-500")
                }
            }}
            onMouseLeave={ () => {

                const e = document.getElementById(data.title)
                if (e) {
                    e.classList.remove("text-red-500")
                }
            }}

            key={data.tittle} className="bg-white flex flex-col overflow-hidden rounded-lg shadow-lg hover:scale-[1.03] transition-transform ease-in-out">
                <div className="flex-shrink-0 pt-12">
                  <img className="px-5 h-15 w-15 object-cover" src={data.imageUrl} alt="" />

                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <a href={data.href} className="mt-2 block">
                      <p  className="text-xl font-semibold text-gray-900">{data.title}</p>
                      <p className="mt-3 text-base text-gray-500">{data.description}</p>
                    <div className="flex items-center mt-10">
                      <p id={data.title} className="text-xl text-black mr-5">LEANR MORE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                        </div>
                    </a>
                  </div>
                </div>
              </div>
    )
}
export default ServiceCard2;
