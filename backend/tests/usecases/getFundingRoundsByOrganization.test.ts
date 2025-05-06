import { FundingRoundRepository } from "../../src/domain/repositories/fundingRoundRepository"
import { GetFundingRoundsByOrganization } from "../../src/usecases/getFundingRoundsByOrganization"

test("getFundingRoundsByOrganization returns data", async () => {
  const mockRepo: FundingRoundRepository = {
    getByOrganizationId: jest.fn().mockResolvedValue([
      { id: "uuid-1", name: "Seed", amount: 10000, organizationId: "org-1", createdAt: new Date() }
    ])
  }

  const usecase = new GetFundingRoundsByOrganization(mockRepo)
  const result = await usecase.execute("org-1")

  expect(result.length).toBe(1)
  expect(result[0].name).toBe("Seed")
})