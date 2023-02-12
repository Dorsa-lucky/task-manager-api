const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)



// const me = new User({
//     name: '      Dorsa     ',
//     email: 'Dorsa@gmail.COM    ',
//     password: '   phone098!    '
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

