import { PrismaClient } from "@prisma/client"
import { FundingRoundRepository } from "../../domain/repositories/fundingRoundRepository"
import { FundingRound } from "../../domain/entities/fundingRound"

export class FundingRoundRepositoryImpl implements FundingRoundRepository {
  constructor(private prisma: PrismaClient) {}

  async getByOrganizationId(orgId: string): Promise<FundingRound[]> {
    return this.prisma.fundingRound.findMany({
      where: { organizationId: orgId }
    })
  }
}