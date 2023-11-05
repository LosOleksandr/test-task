import React from "react"
import { TailSpin } from "react-loader-spinner"

function Loader() {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#3470FF"
      ariaLabel="tail-spin-loading"
      visible={true}
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

export default Loader
