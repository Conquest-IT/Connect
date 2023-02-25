

const Regsiter = () => {
    return (
        <div className='w-screen h-screen flex flex-row '>
            <div className='flex-1 bg-deer bg-cover bg-no-repeat bg-center relative'>
                <div className='flex flex-col absolute inset-y-40 inset-x-16'>
                    <span className='text-rose-500 text-2xl'>Explore</span>
                    <span className='text-white text-4xl'>Beautiful Bangladesh</span>
                </div>
            </div>
            <div className='flex-1 bg-slate-100 w-full flex flex-col justify-center items-center'>
                <span className='text-xl  text-emerald-500 mb-6'>Register to join convresations with others.</span>
                <form className='w-1/2 flex flex-col space-y-2'>
                    <input placeholder='Name' className='p-2 outline-none' />
                    <input placeholder='Email' className='p-2 outline-none' />
                    <input placeholder='Password' className='p-2 outline-none' />
                    <span className='text-sm text-gray-600'>By continuing you agree to our T&Cs.</span>
                    <button className='bg-emerald-500 hover:bg-emerald-700 transition ease-in-out text-white rounded-md p-2 '>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Regsiter