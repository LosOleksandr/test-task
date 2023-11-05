import React, { Suspense } from "react"

const CarList = React.lazy(() => import("../components/CarList"))

const Catalog = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <CarList />
    </div>
  )
}

export default Catalog
