import { useState, useEffect } from "react"
import Markdown from "react-markdown"

export default function App() {
  const [markdown, setMarkdown] = useState('')
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/zacchellodev/better-portfolio/main/Home.md')
      .then(resp => resp.text())
      .then(data => setMarkdown(data))
      .catch(err => setMarkdown(`# Error: ${err}`))
  }, [])
  
  return (
    <div className="content" style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      lineHeight: 2,
      backgroundColor: "#0d1117",
      paddingTop: "70px",
      paddingBottom: "70px",
    }}>
      <div className="container" style={{
        color: "#f2f2f2",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 20
      }}><Markdown>{markdown}</Markdown></div>
    </div>
  )
}
