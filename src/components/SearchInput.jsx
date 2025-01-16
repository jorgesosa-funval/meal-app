
export function SearchInput({ inputClassName, placeholder }) {
    return (
        <div className='w-full h-20 flex justify-center items-center'>
            <input
                type="text"
                placeholder={placeholder}
                className={`bg-slate-600 h-9 rounded-sm px-2 w-4/5 focus:outline-blue-600 ${inputClassName}`}
            />
        </div>
    )
}