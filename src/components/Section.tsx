import React from "react"

type TSection = {
  children: React.ReactNode
}

const Section = ({ children }: TSection) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

export default Section
