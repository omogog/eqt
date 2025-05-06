import { FundingRoundRepository } from "../domain/repositories/fundingRoundRepository"

export class GetFundingRoundsByOrganization {
  constructor(private fundingRepo: FundingRoundRepository) {}

  async execute(orgId: string) {
    return this.fundingRepo.getByOrganizationId(orgId)
  }
}