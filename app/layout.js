import { mainFont } from "@/libs/font"
import "@/styles/reset.css"
import "@/styles/variables.css"
import "@/styles/global.css"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Imaginer",
  description:
    "Imaginer is a simple image generator that use your prompt to generate AI based images.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={mainFont.className}>
      <body className="layout">
        <div aria-hidden="true" className="overlay" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
