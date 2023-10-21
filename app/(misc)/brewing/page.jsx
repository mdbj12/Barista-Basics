import Link from "next/link"

export default function Brewing() {
    return (
        <div className="methods" id="methods">
            <h1>Brew Methods</h1>
            <div className="button-grid">
                <Link href="/drip" className="brew-method">
                    <button>
                        <img src="coffee-bag-icon.png" alt="drip-coffee" />
                    </button>
                    <p>Drip Coffee</p>
                </Link>
                <Link href='/moka' className="brew-method">
                    <button>
                        <img src="moka-pot-icon.png" alt="moka-pot" />
                    </button>
                    <p>Moka Pot</p>
                </Link>
                <Link href='/pourover' className="brew-method">
                    <button>
                        <img src="pour-over-icon.png" alt="pour-over"/>
                    </button>
                    <p>Pour Over</p>
                </Link>
            </div>
        </div>
    )
}