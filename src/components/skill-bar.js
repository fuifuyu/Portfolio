import React, { useEffect } from "react"
import "./components.css"

const Skillbar = ({ className, skills = [] }) => {
  const refs = skills.map(() => React.createRef())
  useEffect(() => {
    refs.forEach(ref => {
      ref.current?.addEventListener("animationend", e => {
        e.stopPropagation()
      })
    })
  }, [])
  let children = []
  skills?.forEach(({ label, level }, index) => {
    children.push(
      <div
        key={index}
        className={`bar bar-${level}`}
        data-label={label}
        ref={refs[index]}
      ></div>
    )
  })
  return <div className={`${className} w-3/5 h-1/2 p-8`}>{children}</div>
}

export default Skillbar
