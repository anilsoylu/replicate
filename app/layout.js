import { mainFont } from "@/libs/font"
import "@/styles/reset.css"
import "@/styles/variables.css"
import "@/styles/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={mainFont.className}>
      <body className="layout">
        <div aria-hidden="true" className="overlay" />
        {children}
      </body>
    </html>
  )
}
