import { ReactNode } from "react"
import '../styles/scss/globals.scss'

export default function RootLayout({  children,}: {  children: ReactNode}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
