import React from "react"
import { useQuery } from "@apollo/client"
import { GET_FUNDING_ROUNDS_BY_ORG } from "../graphql/queries"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const FundingChart = () => {
  const { data, loading, error } = useQuery(GET_FUNDING_ROUNDS_BY_ORG, {
    variables: { orgId: "org-1" }
  })

  if (loading) return <p className="text-gray-500 text-center mt-4">Loading funding data...</p>
  if (error) return <p className="text-red-500 text-center mt-4">Error fetching data</p>
  if (!data || data.fundingRoundsByOrg.length === 0) return <p className="text-center text-gray-500 mt-4">No funding data available</p>

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-center">Funding Rounds</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.fundingRoundsByOrg}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FundingChart