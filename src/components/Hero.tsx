import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='bg-violet-100 h-screen pt-[100px] flex items-center px-8'>
            <div className='max-w-[1600px] w-full mx-auto flex flex-row items-center h-full'>
                <div className='w-1/2'>

                    <div className='max-w-[600px]'>
                        <h1 className='text-5xl font-bold text-blue-950'>Starting your day has never felt better</h1>
                        <p className=' mt-5 font-bold text-blue-950'>Gut-healthy prebiotics for all day no cash energy</p>
                        <Link href='/shop' className='mt-5 w-auto px-5 bg-orange-600 p-2 rounded-xl border-2 border-black text-white font-bold'
                            style={{
                                boxShadow: "2px 2px 4px #000000"
                            }}>Shop Body Balance Powder</Link></div>
                </div>
                <div className='w-1/2 flex items-start justify-start'>
                    <Image
                        src="data:image/jpeg;base64,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"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero