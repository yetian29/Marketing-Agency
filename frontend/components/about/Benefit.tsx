
const benefits= [
    { 
        image: "/images/about/08.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    
    },

    { 
        image: "/images/about/09.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    
    },

    { 
        image: "/images/about/10.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    
    },

    { 
        image: "/images/about/11.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    
    },

    { 
        image: "/images/about/12.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    
    },

    { 
        image: "/images/about/13.svg", 
        title: "Agile team of JS",
        description: "An exclusive team, dedicated only to your project"

    }
    
]

const Benefit = () => {
    return(
 <div className="mx-auto mt-28 grid w-full px-4 lg:px-[54px] gap-10 lg:max-w-none lg:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-16 w-16 object-cover" src={item.image} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500">{item.description}</p>
                  </div>
                  </div>
                </div>
            ))}
          </div>
    )
}
export default Benefit;
