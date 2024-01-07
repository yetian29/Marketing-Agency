

const Dropdown = () => {
    return(
        <div>
            <select
                id="location"
                name="location"
                className="mt-1 block w-auto rounded-md  border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="Canada"
            >
                <option>All vacancies</option>
                <option>Design</option>
                <option>Development</option>
                <option>Business Development</option>
                <option>Project/Product management</option>
            </select>
        </div>
    )
}
export default Dropdown
