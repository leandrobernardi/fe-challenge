import React from "react"

const BoxHeader = ({ text }) => {
  return (
    <div sx={{ textAlign: "left", fontSize: "14px", fontWeight: "bold", border: "1px solid red" }} className={"pepe"}>
      {text}
    </div>
  )
}

export default BoxHeader
