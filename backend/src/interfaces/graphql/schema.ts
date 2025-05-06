import { gql } from "apollo-server-express"

export const typeDefs = gql`
  type Organization {
    id: ID!
    name: String!
    description: String!
  }

  type FundingRound {
    id: ID!
    name: String!
    amount: Int!
    createdAt: String!
    organizationId: String!
  }

  type Query {
    organizations: [Organization!]!
    fundingRoundsByOrg(orgId: String!): [FundingRound!]!
  }
`