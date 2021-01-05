import React from "react"

export default function Gallery({ className }) {
  return (
    <div className={className + " bg-gallery"}>
      <div className="h-1/3"></div>
      <div className="text-center text-white text-4xl animate-bounce">
        In progress ...
      </div>
    </div>
  )
}
