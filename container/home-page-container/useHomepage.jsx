"use client"
import React, { useState, createContext, useContext, useMemo } from "react"

const HomepageContext = createContext()

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState(null)
  const [error, setError] = useState(null)
  const [isSubmitting, setSubmitting] = useState(false)

  const generateImage = async () => {
    try {
      setSubmitting(true)
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) throw new Error(response.statusText ?? response.status)

      const generatedImage = await response.json()
      setImage(generatedImage)
      setError(null)
    } catch (error) {
      setError(error)
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
      image,
      error,
      isSubmitting,
    }),
    [prompt, image, error, isSubmitting]
  )

  return (
    <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
  )
}

export const useHomepage = () => {
  const context = useContext(HomepageContext)
  return context
}
