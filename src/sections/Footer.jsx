import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className='social-icon'>
                <Link href={'https://github.com/Najas06'} className="flex items-center justify-center" target="_blank"><Image width={1080} height={1020} src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/></Link>
            </div>
            <div className='social-icon'>
                <Link href={'https://www.linkedin.com/in/najas-nazar/'} className="flex items-center justify-center" target="_blank"><Image width={1080} height={1020} src="/assets/linkedIn.svg" alt="linkedin" className='w-1/2 h-1/2'/></Link>
            </div>
            <div className='social-icon'>
                <Link href={'https://www.instagram.com/codewithnajas/?igsh=aHZ5dHkwMDY2cjRt'} className="flex items-center justify-center" target="_blank"><Image width={1080} height={1020} src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2'/></Link>
            </div>
        </div>
        <p className='text-white-500'>All Rights Reserved. 2024 </p>
    </section>
  )
}

export default Footer