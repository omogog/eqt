import { gql } from "@apollo/client"

export const GET_FUNDING_ROUNDS_BY_ORG = gql`
  query GetFundingRoundsByOrg($orgId: String!) {
    fundingRoundsByOrg(orgId: $orgId) {
      id
      name
      amount
      createdAt
      organizationId
    }
  }
`