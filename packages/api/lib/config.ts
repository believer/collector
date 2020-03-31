import configPackage from '@iteam/config'

interface DatabaseConfig {
  database: string
}

export interface Config {
  db: DatabaseConfig
}

const config = configPackage({
  file: `${__dirname}/../config.json`,
  defaults: {
    db: {
      database: 'collector.db',
    },
  },
})

export const db = config.get<DatabaseConfig>('db')
