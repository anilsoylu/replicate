"use client"
import Image from "next/image"
import styles from "./styles.module.scss"
import { EXAMPLES } from "./constants"
import { Tag } from "@/components/tag"
import { useHomepage } from "../useHomepage"

function Examples() {
  const { changePropmt } = useHomepage()

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag
            className={styles.copyButton}
            title="Copy"
            onClick={() => changePropmt(example.prompt)}
          />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  )
}

export { Examples }
