import React from "react"
import { inherits } from "util"
import "./components.css"

const ImageContainer = ({ children, className, src }) => {
  return (
    <div className={className}>
      <img src={src} style={{ width: "100%", height: "100%" }} />
      {children}
    </div>
  )
}

export default ImageContainer
