import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import localFont from 'next/font/local'
export const metadata = {
  title: 'Messenger',
  description: 'Free open source chat application',
}
const myFont = localFont({ src: './fonts/SF-Pro-Display-Regular.otf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body  className={myFont.className} >
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
