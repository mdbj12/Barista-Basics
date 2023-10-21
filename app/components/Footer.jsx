import Link from "next/link"

export default function Footer(){
    return (
        <footer>
            <div className="footer-learn">
                <h1>Learn</h1>
                <div className="learn-difficulty">
                    <Link href='/beginner' draggable='false'>Beginner</Link>
                    <Link href='/intermediate' draggable='false'>Intermediate</Link>
                    <Link href='/advanced' draggable='false'>Advanced</Link>
                </div>
            </div>
            <div className="footer-misc">
                <h1>Extra Stuff</h1>
                <div className="footer-misc-links">
                    <Link href='/equipment' draggable='false'>Eqipment</Link>
                    <Link href='/extra' draggable='false'>More!</Link>
                </div>
            </div>
            <div className="footer-contact">
                <h1>Contact</h1>
                <div className="contact-options">
                    <a href="https://github.com/mdbj12" draggable="false">GitHub</a>
                    <a href="https://linkedin.com/in/michael-d-jeung" draggable="false">LinkedIn</a>
                    <a href="https://medium.com/@michaelj229" draggable="false">Medium</a>
                    <a href="https://www.instagram.com/meekaljeung" draggable="false">Insta</a>
                </div>
            </div>
        </footer>
    )
}