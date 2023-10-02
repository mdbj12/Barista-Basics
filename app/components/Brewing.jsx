import Link from "next/link"

export default function Brewing() {
    return (
        <div className="methods" id="methods">
            <h1>Brew Methods</h1>
            <Link href="/drip">
                <button>
                    <img src="coffee-bag-icon.png" alt="drip-coffee" />
                </button>
            </Link>
            <Link href='/moka'>
                <button>
                    <img src="moka-pot-icon.png" alt="moka-pot" />
                </button>
            </Link>
        </div>
    )
}