// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find()
// 2. Mostrar el restaurant_id i name per tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{ restaurant_id: 1, name: 1 })

