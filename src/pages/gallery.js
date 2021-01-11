import React from "react"

export default function Gallery({ className, showContent }) {
  return (
    <div className={className + " bg-gallery"}>
      {showContent && (
        <>
          <div className="h-1/3"></div>
          <div className="text-center text-white text-4xl animate-bounce">
            In progress ...
          </div>
        </>
      )}
    </div>
  )
}
