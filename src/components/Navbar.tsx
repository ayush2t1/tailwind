import React from 'react'
import Link from 'next/link'
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className='w-full bg-white fixed top-0 left-0  px-8 py-4'>
            <div className='flex justify-between items-center max-w-[1600px] w-full mx-auto'>
                <div className=' text-violet-300 font-bold text-3xl'>sweetkick</div>
                <Link href='/shop' className='w-auto px-5 bg-orange-600 p-2 rounded-xl border-2 border-black text-white font-bold'
                    style={{
                        boxShadow: "2px 2px 4px #000000"
                    }}>Shop Now</Link>
            </div>
        </nav>
    )
}

export default Navbar