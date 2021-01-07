import React, { useEffect } from "react"
import "./css/timeline.css"
import "../animation/animation.css"
export default function Timeline({ className }) {
  let ref = React.createRef()
  useEffect(() => {
    ref.current?.addEventListener("animationend", e => {
      e.stopPropagation()
    })
  }, [])
  return (
    <div className={className + " bg-timeline"}>
      <div
        ref={ref}
        className="relative w-1/2 h-1/2 mx-auto wipe"
        style={{ overflowX: "auto", overflowY: "hidden" }}
        onWheel={e => {
          console.log(e)
          e.currentTarget.scrollLeft += e.deltaY
          e.stopPropagation()
        }}
      >
        <div className="absolute-center-y flex flex-row text-xl text-yellow-900 flex-nowrap h-48">
          <div class="slot">
            <div class="card">
              <div class="card-title">
                <div>Title</div>
                <div>2012</div>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue aliquet velit, id imperdiet ante malesuada eget.
              </div>
            </div>
          </div>
          <div class="slot">
            <div class="card">
              <div class="card-title">
                <div>Title</div>
                <div>2012</div>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue aliquet velit, id imperdiet ante malesuada eget.
              </div>
            </div>
          </div>
          <div class="slot">
            <div class="card">
              <div class="card-title">
                <div>Title</div>
                <div>2012</div>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue aliquet velit, id imperdiet ante malesuada eget.
              </div>
            </div>
          </div>
          <div class="slot">
            <div class="card">
              <div class="card-title">
                <div>Title</div>
                <div>2012</div>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue aliquet velit, id imperdiet ante malesuada eget.
              </div>
            </div>
          </div>
          <div class="slot">
            <div class="card">
              <div class="card-title">
                <div>Title</div>
                <div>2012</div>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                congue aliquet velit, id imperdiet ante malesuada eget.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
