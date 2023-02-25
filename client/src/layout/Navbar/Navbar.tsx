

const Navbar = () => {
    return (
        <div className="p-1 bg-emerald-400 flex flex-row justify-between">
            <div>Logo</div>

            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" className="w-full outline-none p-3 pl-10 text-sm text-gray-900 border rounded-md focus:ring-blue-500" placeholder="Search destinations..." />
            </div>

            <div className="">User</div>
        </div>
    )
}

export default Navbar