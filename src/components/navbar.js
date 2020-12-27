import React from "react"
const Navbar = ({ children, ...props }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 justify-center flex flex-row z-50">
      {children}
    </div>
  )
}

export default Navbar
