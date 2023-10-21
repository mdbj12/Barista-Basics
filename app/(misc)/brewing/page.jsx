import Link from "next/link"
import Image from "next/image"

export default function Brewing() {
    return (
        <div className="methods" id="methods">
            <h1>Brew Methods</h1>
            <div className="button-grid">
                <Link href="/drip" className="brew-method">
                    <button>
                        <Image src="/coffee-bag-icon.png" alt="drip-coffee" height={75} width={75}/>
                    </button>
                    <p>Drip Coffee</p>
                </Link>
                <Link href='/moka' className="brew-method">
                    <button>
                        <Image src="/moka-pot-icon.png" alt="moka-pot" height={75} width={75}/>
                    </button>
                    <p>Moka Pot</p>
                </Link>
                <Link href='/pourover' className="brew-method">
                    <button>
                        <Image src="/pour-over-icon.png" alt="pour-over" height={75} width={75}/>
                    </button>
                    <p>Pour Over</p>
                </Link>
            </div>
        </div>
    )
}