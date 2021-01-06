import React from "react"
import "./components.css"

const ImageContainer = ({ children, size, src }) => {
  return (
    <div className="relative">
      <img
        src={src}
        className="img-star"
        style={{ width: size?.width ?? "auto", height: size?.height ?? "auto" }}
      />
      {children}
    </div>
  )
}

export default ImageContainer
