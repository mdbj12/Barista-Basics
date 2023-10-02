import Link from "next/link"

export default function Navigation() {
    return (
        <nav>
            <div>
                <a href="#methods" draggable="false">BREW</a>
            </div>
            <div>
                <a href="#home" draggable="false">
                    <img src="coffee-icon.png" alt="icon" draggable="false" />
                </a>
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