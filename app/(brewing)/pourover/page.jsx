export default function PourOver(){
    return (
        <div className="coffee-container">
            <div className="coffee-type">
                <h1>Drip Coffee - A Household Staple</h1>
            </div>
            <div className="intro-text">
                <h2>What is DRIP coffee?</h2>
            </div>
            <div className="intro-content-container">
                <div className="content">
                    <section className="coffee-desc">
                        <p>
                            Drip coffee, also known as filtered coffee, is a classic and widely popular method of brewing coffee.
                            It involves hot water slowly passing through ground coffee beans, typically held in a paper or metal filter.
                            This gradual extraction process allows the water to absorb the flavors and aromas from the coffee grounds, resulting in a milder and smoother coffee compared to some other brewing methods.
                            Drip coffee is favored for its simplicity and consistency, making it a morning ritual for many.
                            It's an excellent choice for those who prefer a clean, no-frills cup of coffee that can be enjoyed black or customized with cream and sugar to suit individual tastes.
                        </p>
                    </section>
                    <section className="image-container">
                        <Image src="/drip-coffee-img.jpg" alt="drip-coffee" className="coffee-image" height={500} width={500}/>
                    </section>
                </div>
            </div>
            <div className="instructions-container">
                <div className="instructions-title">
                    <h2>How do I brew?</h2>
                </div>
                <div className="instruction-intro">
                    <section className="instruction-steps">
                        <ol>
                            <li>
                                Grind your coffee to a MEDIUM SIZED grind!
                                Your grind consistency should be similar to sand.
                            </li>
                            <li>
                                Prep your coffee machine (Take a look at my suggestions!), and wait for a few minutes!
                            </li>
                            <li>
                                And thats all! Drip coffee has been served as soon as your coffee pot turns off.
                                Easiest brew of your life!
                            </li>
                        </ol>
                    </section>
                    <section className="instruction-image">
                        {/* <img /> */}
                    </section>
                </div>
            </div>
        </div>
    )
}