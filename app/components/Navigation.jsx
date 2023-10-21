import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
    return (
        <nav>
            <div>
                <Link href="/" draggable="false">
                    <Image src="/coffee-icon.png" alt="icon" draggable="false" height={60} width={60}/>
                </Link>
            </div>
            <div className="brewing-dropdown">
                <Link href='/brewing'>
                    <button className="brewing-btn">LEARN</button>
                </Link>
                <div className="brewing-options">
                    <Link href='/beginner' draggable='false' className="brew-option">BEGINNER</Link>
                    <Link href='/intermediate' draggable='false' className="brew-option">INTERMEDIATE</Link>
                    <Link href='/advanced' draggable='false' className="brew-option">ADVANCED</Link>
                </div>
            </div>
        </nav>
    )
}