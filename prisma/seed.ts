import { PrismaClient, Prisma } from '../prisma/generated/client'

const prisma = new PrismaClient()

const organizationData: Prisma.OrganizationCreateInput[] = [
  {
    name: 'Root',
    slug: 'root',
    members: {
      create: {
        role: 'ADMIN',
        user: {
          create: {
            email: 'root@root.com',
            password: 'root',
          },
        },
      },
    },
  },
]

export async function main() {
  for (const org of organizationData) {
    await prisma.organization.create({ data: org })
  }
}
main()
