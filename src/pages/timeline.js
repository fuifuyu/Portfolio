import React from "react"
import "./timeline.css"
export default function Timeline({ className }) {
  return (
    <div className={className + " bg-timeline"}>
      <div
        className="relative w-1/2 h-1/2 mx-auto"
        style={{ overflowX: "auto", overflowY: "hidden" }}
        onWheel={e => {
          console.log(e)
          e.currentTarget.scrollLeft += e.deltaY
          e.stopPropagation()
        }}
      >
        <div className="absolute-center-y flex flex-row text-xl text-white flex-nowrap h-48">
          <div class="card">test</div>
          <div class="card">test</div>
          <div class="card">test</div>
          <div class="card">test</div>
          <div class="card">test</div>
          <div class="card">test</div>
        </div>
      </div>
    </div>
  )
}
