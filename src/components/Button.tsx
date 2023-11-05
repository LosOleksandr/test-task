import React from "react"

type TButton = {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: TButton) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-xl"
    >
      {children}
    </button>
  )
}

export default Button
