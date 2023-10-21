import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Barista Basics',
  description: 'Learn how to make Coffee!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
