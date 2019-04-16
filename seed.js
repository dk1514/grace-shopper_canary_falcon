const {db} = require('./server/db')
const Hats = require('./server/db/hat')

const seed = async () => {
  await db.sync({force: true})

  const hat1 = await Hats.create({
    name: 'red baseball hat',
    color: 'red',
    type: 'baseball hat',
    sku: '0000001',
    price: 19.99,
    manufacturer: 'hatman',
    description: 'this is a red baseball hat',
    quantity: 500
  })

  const hat2 = await Hats.create({
    name: 'green baseball hat',
    color: 'green',
    type: 'baseball hat',
    sku: '0000002',
    price: 19.99,
    manufacturer: 'hatman',
    description: 'this is a green baseball hat',
    quantity: 500
  })

  const hat3 = await Hats.create({
    name: `frank's fedora`,
    color: 'brown',
    type: 'fedora',
    sku: '0000003',
    price: 499.99,
    manufacturer: 'hatmaster',
    description: `frank sinatra's iconic fedora. worn by mr sinatra himself`,
    quantity: 1
  })

  const hat4 = await Hats.create({
    name: 'texan cowboy hat',
    color: 'beige',
    type: 'cowboy hat',
    sku: '0000004',
    price: 49.99,
    manufacturer: 'cowboy nation',
    description: 'this is a cowboy bebop',
    quantity: 500
  })
}
seed().catch(err => {
  console.error('something went wrong')
  console.error(err)
  db.close()
})
