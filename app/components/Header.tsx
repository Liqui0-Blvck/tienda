import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow'>
        <Link href='/'>
            <Image src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1436605/draw_svg20210507-22909-1cvns2e.svg.png" alt='logo' width={70} height={70}/>
        </Link>

        <div className='flex items-center space-x-2.5 text-sm'>
            <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
                Login
            </button>
            <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent'>
                Sign up
            </button>
        </div>
    </header>
  )
}

export default Header
