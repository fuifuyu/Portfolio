import React from "react"
const Navbar = ({ navigate }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 justify-center flex flex-row z-50">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  )
}

export default Navbar
