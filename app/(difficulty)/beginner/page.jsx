import Link from "next/link";

export default function Beginner() {
    return (
        <div className="beginner-intro">
            <div className="beginner-title">
                <h1>BEGINNER BREWS</h1>
            </div>
            <div className="beginner-text">
                <p>
                    Here you will learn how to brew multiple different coffee methods.
                    What makes this, beginner, is really determined by how much prior knowledge you have, but also based on the equipment you might have at home.
                    I will be simplifying these methods into one concise and easy to follow directions.
                    The reasoning behind this is mainly due to the fact that coffee can get very intricate based on how much knowledge you have prior to this page.
                    Every little detail will affect your result; Especially the taste of your brew.
                    Hopefully this will be an easy to follow instructional website where you can come in with zero prior knowledge, and take away a detailed experience that you can carry over to be one step closer to achieving a coffee shop-esqe taste!
                </p>
            </div>
            <div className="beginner-methods">
                <div>
                    <h2>Select your method!</h2>
                </div>
                <div className="beginner-brews">
                    <Link href='/drip' draggable='false'>Drip Coffee</Link>
                </div>
            </div>
        </div>
    )
}