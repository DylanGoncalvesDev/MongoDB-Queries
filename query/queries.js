// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{ _id: 0 })
// 2. Mostrar el restaurant_id i name per tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1 })
// 3. Mostrar el restaurant_id, name, borough i cuisine.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
// 4. Mostrar restaurant_id, name, borough i zip code.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 })
// 5. Mostrar tots els restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" },{ _id: 0 })
// 6. Mostrar els primers 5 restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" },{ _id: 0 }).limit(5)
// 7. Mostrar el pròxims 5 restaurants després de saltar els primers 5 del Bronx.
db.restaurants.find({ borough: "Bronx" },{ _id: 0 }).skip(5).limit(5)



