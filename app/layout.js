import './globals.css'

export const metadata = {
  title: 'Barista Basics',
  description: 'Learn how to make Coffee!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
