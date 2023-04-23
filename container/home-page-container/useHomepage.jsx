"use client"
import React, { useState, createContext, useContext, useMemo } from "react"

const HomepageContext = createContext()

export const HomepageContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("")

  const generateImage = () => {
    // api call
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
