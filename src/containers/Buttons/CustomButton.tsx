const CustomButton = ({ isDirty = false, isValid = false, children = '', isCancelled = false }) => {
    return (
        <button className={`bg-blue-500 text-white w-44 border-2 cursor-pointer p-2 self-center rounded-full ${!isCancelled ? 'hover:bg-blue-600' : 'opacity-30' } duration-300`}
            type={"submit"}
            >
                {children}
        </button>
    )
}

export default CustomButton