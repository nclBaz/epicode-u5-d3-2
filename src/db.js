import { Sequelize } from "sequelize"

const { PG_DB, PG_HOST, PG_PORT, PG_PW, PG_USER } = process.env

const sequelize = new Sequelize(PG_DB, PG_USER, PG_PW, {
  host: PG_HOST,
  port: PG_PORT,
  dialect: "postgres",
})

export const pgConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Successfully connnected to Postgres!")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
