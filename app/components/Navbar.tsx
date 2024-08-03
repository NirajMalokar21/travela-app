import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../constants"



const Navbar = () => {
  return (
    <nav className="flexBetween padding-container relatice z-30 py-5 flex-row max-container">
        <Link href='/'><Image src='/hilink-logo.svg' alt="logo" width={74} height={29} /></Link>
        <ul className="flexCenter flex-row gap-8">
            {NAV_LINKS.map((link, i) => (
                <Link href={link.href} key={link.key} 
                className="regular-16 cursor-pointer text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <button className="bg-black rounded-full text-white py-4 px-8 flex flex-row gap-2 font-bold">
            <Image 
                src='/user.svg'
                alt="User"
                width={25}
                height={25}
            />
            Login
        </button>
    </nav>
  )
}

export default Navbar