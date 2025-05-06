import { FundingRound } from "../entities/fundingRound"

export interface FundingRoundRepository {
  getByOrganizationId(orgId: string): Promise<FundingRound[]>
}