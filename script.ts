import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// for helpful debugging, insert into PrismaClient: { log: ["query"]}
async function main() {
    const user = await prisma.user.findMany({
        where: {//
            age: { gt: 30 }
        }
    })
    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Thomas",
    //         age: 25,
    //     },
    //     include: { userPreference: true },
    // })

    // const user =  await prisma.user.update({
    //     where: {
    //         email: "thom@test1.com",
    //     },
    //     data: {
    //         userPreference: {
    //             //connect or disconnect other models to this user
    //             // connect: {
    //             //     id: '5d0ca01a-fcbd-4ab6-9122-8b5cb30f874b'
    //             // }
    //             disconnect: true
    //         }
    //     }
    // })

    // const user =  await prisma.user.updateMany({
    //     where: {
    //         name: "Sally"
    //     },
    //     data: {
    //         name: "New Sally"
    //     }
    // })

    // const user = await prisma.user.update({
    //     where: {
    //         email: "sally@test1.com"
    //     },
    //     data: {
    //         email: "sally@updatedtest.com"
    //     },
    // })

    console.log(user);
}


// async function main() {
//     const post = await prisma.post.findMany({
//         where: {
//             author: {
//                 is: {
//                     age: 27,
//                 },
//                 isNot: {
//                     name: "sally",
//                 }
//             }
//         }
//     })
//     console.log(post);
// }

// async function main() {
//     const user = await prisma.user.findMany({
//         where: {
//             // name: { not: "Sally"},
//             // name: { in: ["Thomas", "Sarah"]},
//             // name: { notIn: ["Thomas", "Sally"]}
//             // name: "Thomas",
//             // lt (less than), gt (greater than), gte (greater than or equal to), lte (less than or queal to)
//             // age: { gt: 20 },
//             // email: { contains: "@test1.com"},
//             // email: { endsWith: "@test2.com"},
//             // AND: [
//             //     {email: { endsWith: "@test1.com"}},
//             //     {name: "Sally"}
//             // ]
//             // OR: [
//             //     { email: { startsWith: "sally"}},
//             //     { age: { gt: 20}}
//             // ]
//             // NOT: { email: { startsWith: "sally"}},
//             // userPreference: {
//             //     emailUpdates: true,
//             // }
//             // writtenPosts: {
//             //     some: { //every, some, none
//             //         title: "Test"
//             //     }
//             // }
//         },
//         // distinct: ["name", "age"],
//         // take: 2,
//         // skip: 1,
//         // orderBy: {
//         //     age: "desc",
//         // }
//     })
//     console.log(user);

//     // await prisma.user.createMany({
//     //     data: [
//     //         {
//     //             name: "Thomas",
//     //             age: 33,
//     //             email: "thom@test2.com"
//     //         },
//     //         {
//     //             name: "Sally",
//     //             age: 14,
//     //             email: "sally@test2.com"
//     //         }

//     //     ]
//     // })

//     // await prisma.user.deleteMany()
//     // const user = await prisma.user.createMany({
//     //     data: [{
//     //         name: "Thomas",
//     //         email: "thom@test.com",
//     //         age: 27,
//     //     }, {
//     //         name: "Sarah",
//     //         email: "sarah@test.com",
//     //         age: 33,
//     //     }]
//     // })
    
//     //console.log(user)
// }

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })