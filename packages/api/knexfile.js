module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './collector.db',
      timezone: 'UTC',
    },
  },
}

