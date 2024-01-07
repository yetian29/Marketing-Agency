
"use client"

import Link from "next/link";
import { DotLoader } from "react-spinners";
import { useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const solutions = [
  {
    name: 'Cases',
    description: 'Measure actions your users take',
    href: '/cases',
    icon: IconOne,
  },
  {
    name: 'Services',
    description: 'Create your own targeted content',
    href: '/services',
    icon: IconTwo,
  },
  {
    name: 'Careers',
    description: 'Keep track of your growth',
    href: '/careers',
    icon: IconThree,
  },
  {
    name: 'Blog',
    description: 'Keep track of your growth',
    href: '/blog',
    icon: IconThree,
  },
  {
    name: 'About us',
    description: 'Keep track of your growth',
    href: '/about',
    icon: IconThree,
  },

  {
    name: 'Contact',
    description: 'Keep track of your growth',
    href: '/contact',
    icon: IconThree,
  },
]




const navigation = [
    { name: "Cases", href: "/cases"},
    { name: "Services", href: "/services"},
    { name: "Careers", href: "/careers"},
    { name: "Blog", href: "/blog"},
    { name: "About Us", href: "/about"},
    { name: "Contact", href: "/contact"},
]
const Navbar = () => {
    const [color, setColor] = useState("#ffffff")
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)

    function scrollFunction() {
        if (typeof window !== "undefined") {
           const navbar =  document.getElementById("navbar")
           if (navbar) {
                const scrolled = window.scrollY || document.documentElement.scrollTop
                if (scrolled > 50) {
                    navbar.classList.remove("bg-gray-100")
                    navbar.classList.add("shadow-navbar", "bg-white");
                }
                else {
                    navbar.classList.remove("shadow-navbar", "bg-white");
                    navbar.classList.add("bg-gray-100");

                     

                }
                
                

            }

        }}

    if (typeof window !== "undefined") {
        // Sử dụng addEventListener để theo dõi sự kiện cuộn
        window.addEventListener("scroll", scrollFunction)
    }

    return (
        <nav id="navbar" className="w-full lg:px-10 py-6 top-0 fixed flex items-center justify-between z-10">
            <Link href="/" className="flex-shrink-0">
                <img src="/images/murkiva.png"  className="h-auto w-48" alt="murkiva"/>
            </Link>
            <div className="lg:flex items-center gap-10 hidden flex-shrink-0 xl:ml-[490px] ml-10">
                {navigation.map(( item, index ) => (
                    <Link key={index} href={item.href} className="font-medium text-lg relative overflow-hidden group">
                        <span className="relative mb-4">
                                {item.name}


                        <span className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-orange-button transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 hover:underline-offset-4"></span>



                        </span>
                    </Link>

                ))}
                <button
                    className="rounded-md px-[10px] py-[6px] bg-orange-button inline-flex font-medium text-white hover:bg-black shadow-sm transition duration-200 ease-in-out text-lg">
                    Hire us
                    <DotLoader
                        color={color}
                        loading={loading}
                        size={18}
                        className="ml-2"

                    />

                </button>

            </div>
            <div className="flex lg:hidden mr-2">
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={`
${open ? 'text-white' : 'text-white/90'}
focus:ring-none focus:outline-none`}
                                >

                    {
                        open ? 
                                        <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUdJREFUSEvt1bsuRUEUxvGfS6XTewaJNxAhhAiFQkiUWgoPpEAhIiI6jZBoCF7FJS7R2EvmJHISZvbZyTmKM93OXrP+832z1poBPVoDPeLqg7vmfN/qf2X1KE6whYfMyWawXcUt4/Ov2NwdD+Ie43jEFO5+SbhYxR1jGGeI719XDhwbN7DLd88/YRo3bRkXkisB/UjQ86bgdvhLUt6Ct0PncJErlhLFrRyrOEjKW/AxHCZ73zBfAo2EdcARv4b9dJKAjyDq4B2zlROXOaWt/3XBsS+U72EoJQmlce/XpdBOFPcMvJ7UxgF+Wv2KKKqrUtV1rM4VV7RRUUXXsfpnL3etnToZIFnlOaujVW4xgeeqRycLR+ZpNWqXmk6ueCSOqmLaSXP7r3wxxTax0vSRKC3S2nE5q2snLN3QB5c61Tiub3VjC0sTfAHboEIfytnLXAAAAABJRU5ErkJggg==" className="w-10 h-10"/>
                            :
                                        <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==" className="w-10 h-10"/>
                    }
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute -left-24 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                {solutions.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                                    >
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                            <item.icon aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {item.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="bg-gray-50 p-4">
                                                <a
                                                    href="##"
                                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                                >
                                                    <span className="flex items-center">
                                                        <span className="text-sm font-medium text-gray-900">
                                                            Documentation
                                                        </span>
                                                    </span>
                                                    <span className="block text-sm text-gray-500">
                                                        Start integrating products and tools
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
            </div>
        </nav>
    )
}
export default Navbar;



function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
