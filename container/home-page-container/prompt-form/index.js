"use client"
import styles from "./styles.module.scss"
import { useHomepage } from "../useHomepage"

function PromptForm() {
  const { prompt, setPrompt, generateImage } = useHomepage()

  const handleChange = (e) => {
    setPrompt(event.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    generateImage()
  }

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
