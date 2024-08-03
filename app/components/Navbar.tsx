import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../constants"
import Button from "./Button"



const Navbar = () => {
  return (
    <nav className="flexBetween padding-container relatice z-30 py-5 flex-row max-container">
        <Link href='/'><Image src='/hilink-logo.svg' alt="logo" width={74} height={29} /></Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link, i) => (
                <Link href={link.href} key={link.key} 
                className="regular-16 cursor-pointer text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button 
                title="Login"
                type="button"
                icon="/user.svg"
                variant="btn_dark_green"
            />
        </div>
        <Image 
            src='/menu.svg'
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />

    </nav>
  )
}

export default Navbar