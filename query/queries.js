// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find({ _id: 0, })
// 2. Mostrar el restaurant_id i name per tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1 })
// 3. Mostrar el restaurant_id, name, borough i cuisine.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
