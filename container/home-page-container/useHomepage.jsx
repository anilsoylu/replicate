"use client"
import React, { useState, createContext, useContext, useMemo } from "react"

const HomepageContext = createContext()

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("")

  const generateImage = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) throw new Error(response.statusText ?? response.status)

      const generatedImage = await response.json()
    } catch (error) {
      throw new Error("Failed to generate the image")
    }

    setSubmitting(false)
  }

  const changePropmt = (newPrompt) => {
    setPrompt(newPrompt)
    window.scrollTo(0, 0)
  }

  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      generateImage,
      changePropmt,
    }),
    [prompt]
  )

  return (
    <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
  )
}

export const useHomepage = () => {
  const context = useContext(HomepageContext)
  return context
}
