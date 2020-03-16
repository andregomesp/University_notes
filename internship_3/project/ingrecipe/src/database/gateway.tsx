import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

let sqlDatabase: SQLiteObject;

function createDB() {
    SQLite.create({
        name: "database.db",
        location: "default"
    }).then((db: SQLiteObject) => {
        sqlDatabase = db;
    })
}

export function get(params: any) {
    if (sqlDatabase) {
        sqlDatabase.executeSql("");
    }
}

export function list(params: any) {
    if (sqlDatabase) {

    }
}