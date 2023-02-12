//this file is starting up our applicatio
const express = require('express')
require('./db/mongoose')
const userRouter = require ('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 





//parsing incoming json file to the object. express.json() looks for incoming requests that have a Content-Type header of 'application/json'
// and then process them and puts the properties on req.body for you to access.
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ', port)
})


