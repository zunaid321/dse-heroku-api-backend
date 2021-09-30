const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://zunaid321:Zunaid123@cluster0.mvlga.mongodb.net/dse?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});