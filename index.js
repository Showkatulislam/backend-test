import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({message:"Hello world",status:400})
})

app.listen(8000, () => {
    console.log("I am running from server 8000.")
})