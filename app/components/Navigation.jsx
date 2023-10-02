import Link from "next/link"

export default function Navigation() {
    return (
        <nav>
            <div className="brewing-dropdown">
                <Link href='#methods'>
                    <button className="brewing-btn">BREWING</button>
                </Link>
                <div className="brewing-options">
                    <Link href='/drip' draggable='false' className="brew-option">DRIP</Link>
                    <Link href='/moka' draggable='false' className="brew-option">MOKA POT</Link>
                </div>
            </div>
            <div>
                <Link href="/" draggable="false">
                    <img src="coffee-icon.png" alt="icon" draggable="false" />
                </Link>
            </div>
            <div className="contact-dropdown">
                <button className="contact-btn">FIND ME</button>
                <div className="contact-options">
                    <a href="https://github.com/mdbj12" draggable="false">GitHub</a>
                    <a href="https://linkedin.com/in/michael-d-jeung" draggable="false">LinkedIn</a>
                    <a href="https://medium.com/@michaelj229" draggable="false">Medium</a>
                    <a href="https://www.instagram.com/meekaljeung" draggable="false">Insta</a>
                </div>
            </div>
        </nav>
    )
}