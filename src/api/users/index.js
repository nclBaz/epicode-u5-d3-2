import express from "express"
import UserModel from "./model.js"

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default usersRouter
