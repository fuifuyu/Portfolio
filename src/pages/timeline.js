import React from "react"
import board from "../images/timeline.png"

export default function Timeline({ className }) {
  const [loaded, setLoaded] = React.useState(false)
  let animClass = "translate-y-full"
  if (loaded) animClass = ""
  return (
    <div className={className + " bg-timeline flex flex-col justify-end"}>
      <img
        onLoad={() => {
          setTimeout(() => {
            setLoaded(true)
          }, 1000)
        }}
        src={board}
        className={`transition duration-500 ease-in-out transform ${animClass}`}
      />
    </div>
  )
}
