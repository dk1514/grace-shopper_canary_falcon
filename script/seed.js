'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Hat} = require('../server/db/models')
const {Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'admin@email.com', password: '123', isAdmin: true})
  ])

  const hats = await Promise.all([
    Hat.create({
      name: 'red baseball hat',
      price: 1999,
      manufacturer: 'hatman',
      description: 'this is a red baseball hat',
      quantity: 500,
      imageUrl: '/hatimages/redbaseballcap.jpg'
    }),
    Hat.create({
      name: 'green baseball hat',
      price: 1999,
      manufacturer: 'hatman',
      description: 'this is a green baseball hat',
      quantity: 500,
      imageUrl: '/hatimages/greenbaseballcap.jpg'
    }),
    Hat.create({
      name: `frank's fedora`,
      price: 49999,
      manufacturer: 'hatmaster',
      description: `frank sinatra's iconic fedora. worn by mr sinatra himself`,
      quantity: 1,
      imageUrl: '/hatimages/No_Image_Available.jpg'
    }),
    Hat.create({
      name: 'texan cowboy hat',
      price: 4999,
      manufacturer: 'cowboy nation',
      description: 'this is a cowboy bebop',
      quantity: 500,
      imageUrl: '/hatimages/cowboyhat.jpg'
    })
  ])

  const order = await Promise.all([
    Order.create({
      isCart: false,
      isSubmitted: true
    })
  ])

  console.log(`seeded ${users.length} users123123`)
  console.log(`seeded ${hats.length} hats`)
  console.log(`seeded successfully minus hats`)
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
