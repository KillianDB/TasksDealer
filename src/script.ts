import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@prisma.io',
    //     },
    //   })
    //   console.log(user)

    // const users = await prisma.user.findMany()
    //   console.log(users)

    // const usersWithPosts = await prisma.user.findMany({
    //     include: {
    //       tasks: true,
    //     },
    //   })
    //   console.dir(usersWithPosts, { depth: null })

    const user = await prisma.user.create({
        data: {
            name: 'Killian',
            email: 'killiandomingues57@gmail.com',
            tasks: {
                create: {
                    title: '',
                    description: '',
                    created_at:new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    completed_at: undefined
                },
            },
        },
    })
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })