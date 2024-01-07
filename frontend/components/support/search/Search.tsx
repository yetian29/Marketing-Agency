// import { useRef, useState, useEffect } from "react";

// const Search = () => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const searchRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsSearchVisible(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const handleFormSubmit = (event) => {
//     // Prevent the default form submission behavior
//     event.preventDefault();
//   };

//   return (
//     <form
//       onSubmit={handleFormSubmit}
//       action="#"
//       method="get"
//       className="relative block mt-8 w-[300px]"
//       ref={searchRef}
//     >
//       <button
//         type="submit"
//         onClick={toggleSearch}
//         className="border border-slate-300 w-10 h-10 absolute inset-y-0 left-0 flex items-center px-2 rounded-md hover:text-orange-button"
//       >
//         <i className='bx bx-search-alt text-2xl'></i>
//       </button>
//       {isSearchVisible && (
//         <div className="relative block mt-8" ref={searchRef}>
//           <button onClick={toggleSearch} className="absolute inset-y-0 left-0 flex items-center px-2 rounded-md hover:text-orange-button">
//             <i className='bx bx-search-alt text-2xl'></i>
//           </button>
//           <input
//             className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-[40px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//             placeholder="Search..."
//             type="text"
//             name="search"
//           />
//         </div>
//       )}
//     </form>
//   );
// };

// export default Search;
