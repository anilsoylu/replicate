"use client"
import { useState } from "react"
import styles from "./styles.module.scss"

function PromptForm() {
  const [prompt, setPrompt] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setPrompt(event.target.value)
  }

  const handleFormSubmit = () => {}

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
          required
          value={prompt}
          onChange={handleChange}
        />
        <button className={styles.generateButton} type="submit">
          Generate
        </button>
      </form>
    </div>
  )
}

export { PromptForm }
