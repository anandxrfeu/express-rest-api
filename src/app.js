import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"

import dbConnect from "./config/db.config.js"
import userRouter from "./routes/user.routes.js"
import fileRouter from "./routes/file.routes.js"

dbConnect()
const app = express()
const PORT = process.env.PORT || 5005

app.use(express.json())           
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({msg: "hi"})
})

app.use("/api", userRouter)
app.use("/api", fileRouter)


app.listen(PORT, () => {
    console.log(`Api running on port ${PORT}`)
})