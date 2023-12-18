

const CaseCard = ({data, index}) => {

    return (
        <div
            onMouseEnter={() => {
                const title_element = document.getElementById(index)
                title_element.classList.add("text-red-500")
            }}

            onMouseLeave={() => {
                const title_element = document.getElementById(index)
                title_element.classList.remove("text-red-500")
            }}


            key={data.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0 hover:scale-95 transition-transform ease-in-out">
                  <img className="h-auto w-full object-cover" src={data.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={data.category.href} className="hover:underline">
                        {data.category.name}
                      </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                      <p id={index} className="text-xl font-semibold text-gray-900">{data.title}</p>
                      <p className="mt-3 text-base text-gray-500">{data.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={data.author.href}>
                        <span className="sr-only">{data.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={data.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={data.author.href} className="hover:underline">
                          {data.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={data.datetime}>{data.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{data.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
}
export default CaseCard;
