function SearchInput() {
    return (
        <div className='flex bg-gray-500 mx-auto w-4/5 mt-3 h-9 rounded-md overflow-hidden'>
            <figure className='text-white bg-indigo-700 w-10 grid place-content-center flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </figure>
            <input
                type="text"
                placeholder='Search'
                className='w-full outline-none px-2 text-gray-900'
            />
        </div>
    )
}

export default SearchInput