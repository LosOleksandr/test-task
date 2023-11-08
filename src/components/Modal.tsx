import { IconX } from "@tabler/icons-react"
import React from "react"

type TModal = {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: TModal) => {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const closeOnEscape = (evt: KeyboardEvent) => {
      if (evt.key === "Escape" && ref.current) {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", closeOnEscape)
    return () => {
      window.removeEventListener("keydown", closeOnEscape)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  const handleBackdropClick = (evt: React.MouseEvent) => {
    if (evt.currentTarget === evt.target) onClose()
  }

  return (
    <div
      ref={ref}
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 "
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-8 pt-9 bg-white dark:bg-black rounded-xl">
        <button
          className="absolute top-3 right-3 dark:text-white dark:hover:text-red-500 hover:text-red-500 text-black transition-colors"
          onClick={onClose}
        >
          <IconX />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
