import React from "react"

export default function Intro({ className }) {
  return (
    <div className={className + " bg-intro flex flex-col justify-center"}>
      <div className="bg-tint bg-opacity-60 w-7/12 p-8 ml-10 text-gray-700 rounded text-2xl">
        <div className="mb-3 text-4xl">Hello!</div>
        <div className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue
          aliquet velit, id imperdiet ante malesuada eget. In nec posuere erat.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur ultrices, lacus ac tincidunt
          dignissim, felis magna mollis lorem, eget pretium enim erat ac nunc.
        </div>
        <div>
          Nunc sed risus eget risus porttitor consectetur vitae sed eros. In
          ultricies dapibus purus a feugiat.
        </div>
      </div>
    </div>
  )
}
