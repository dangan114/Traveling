import Dexie from 'dexie'

const initDb = async () => {
    let db = new Dexie ('LocationsDatabase');
    if (!(await Dexie.exists(db.name))) {
        console.log("Db does not exist");
        db.version(1).stores({ 
            locations: "&code, name, city"
         });
    } else {
        console.log("Database exists")
    }
    await db.open();
    console.log("Could open DB")
    return db;
}

const dbAddLocation = async (location) => {
    const db = await initDb() 

    const locationsTable = db.table('locations')

    db.transaction('rw', locationsTable, async () => {
        await locationsTable.put(location, [location.countryCode])
    })  

}

// const dbUpdateHotels = async (hotelsArray) => {
//     var db = await initDb()

//     db.transaction('rw', db.locations, async () => {
//         await db.locations.bulkAdd(hotelsArray)
//     }).then(() => {
//         console.log("Transaction Completed")
//     }).catch(err => {
//         console.error(err.stack)
//     })
// }

const dbGetAllLocations = async () => {
    var db = await initDb()
    var locationsTable = db.table('locations')

    var data = []

    await db.transaction('r', locationsTable, async () => {
        console.log("All data")
        data = await locationsTable.toArray()        
    })

    return data
}

export {
    initDb, dbAddLocation, dbGetAllLocations
}