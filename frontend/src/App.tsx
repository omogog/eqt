import React from "react"
import FundingChart from "./components/FundingChart"

function App() {
  return (
    <div className="max-w-3xl mx-auto font-sans p-6">
      <p className="font-semibold mb-4">Explore and create a chart or graph of any aspect of the data.</p>
      <FundingChart />
    </div>
  )
}

export default App