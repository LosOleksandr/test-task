import React from "react"

type TModal = {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: TModal) => {

  


  return <div>{children}</div>
}

export default Modal
