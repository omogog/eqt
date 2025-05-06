import { PrismaClient } from "@prisma/client"
import { OrganizationRepository } from "../../domain/repositories/organizationRepository"
import { Organization } from "../../domain/entities/organization"

export class OrganizationRepositoryImpl implements OrganizationRepository {
  constructor(private prisma: PrismaClient) {}

  async getAll(): Promise<Organization[]> {
    return this.prisma.organization.findMany()
  }
}