import { PrismaClient } from "@prisma/client"
import { OrganizationRepositoryImpl } from "../../infrastructure/prisma/organizationRepositoryImpl"
import { FundingRoundRepositoryImpl } from "../../infrastructure/prisma/fundingRoundRepositoryImpl"
import { GetFundingRoundsByOrganization } from "../../usecases/getFundingRoundsByOrganization"

const prisma = new PrismaClient()
const orgRepo = new OrganizationRepositoryImpl(prisma)
const fundingRepo = new FundingRoundRepositoryImpl(prisma)
const getFundingRounds = new GetFundingRoundsByOrganization(fundingRepo)

export const resolvers = {
  Query: {
    organizations: () => orgRepo.getAll(),
    fundingRoundsByOrg: (_: any, args: { orgId: string }) => getFundingRounds.execute(args.orgId)
  }
}