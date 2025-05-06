import { Organization } from "../entities/organization"

export interface OrganizationRepository {
  getAll(): Promise<Organization[]>
}