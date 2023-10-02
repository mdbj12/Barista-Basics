import Navigation from "./Navigation"
import Brewing from "./Brewing"
import Link from "next/link"

export default function Homepage() {

  return (
    <main className="homepage" id="homepage">
      <Navigation />
      <div className="landing-page" id="home">
        <h1>Barista Basics</h1>
      </div>
      <div className="about-section" id="about">
        <h2>Not your average class</h2>
        <p>With over 4 years of experience as a barista, we will be teaching you everything from basics to the tiny nuances of coffee.</p>
        <p>Because for us, coffee is more than just a simple pleasure.</p>
      </div>
      <Brewing />
    </main>
  )
}
