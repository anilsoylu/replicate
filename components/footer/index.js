import Link from "next/link"
import GithubIcon from "@/assets/icons/github.svg"
import TwitterIcon from "@/assets/icons/twitter.svg"

import styles from "./styles.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/anilsoylu" target="_blank">
        <GithubIcon />
      </Link>
      <Link href="https://twitter.com/anilsoylu" target="_blank">
        <TwitterIcon />
      </Link>
      <p>
        Made by <b>Anıl SOYLU</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  )
}

export { Footer }
