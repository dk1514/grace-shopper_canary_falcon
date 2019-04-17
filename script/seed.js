'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Hats = require('../server/db/models/hat')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const hat1 = await Hats.create({
    name: 'red baseball hat',
    color: 'red',
    type: 'baseball hat',
    sku: '0000001',
    price: 19.99,
    manufacturer: 'hatman',
    description: 'this is a red baseball hat',
    quantity: 500,
    imageUrl: '/hatimages/redbaseballcap.jpg'
  })

  const hat2 = await Hats.create({
    name: 'green baseball hat',
    color: 'green',
    type: 'baseball hat',
    sku: '0000002',
    price: 19.99,
    manufacturer: 'hatman',
    description: 'this is a green baseball hat',
    quantity: 500,
    imageUrl: '/hatimages/greenbaseballcap.jpg'
  })

  const hat3 = await Hats.create({
    name: `frank's fedora`,
    color: 'brown',
    type: 'fedora',
    sku: '0000003',
    price: 499.99,
    manufacturer: 'hatmaster',
    description: `frank sinatra's iconic fedora. worn by mr sinatra himself`,
    quantity: 1,
    imageUrl: '/hatimages/fedora.jpg'
  })

  const hat4 = await Hats.create({
    name: 'texan cowboy hat',
    color: 'beige',
    type: 'cowboy hat',
    sku: '0000004',
    price: 49.99,
    manufacturer: 'cowboy nation',
    description: 'this is a cowboy bebop',
    quantity: 500,
    imageUrl: '/hatimages/cowboyhat.jpg'
  })

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
