import Database from 'better-sqlite3'
import { db as dbConfig } from '../config'

export const db = new Database(dbConfig.database, { verbose: console.log })

