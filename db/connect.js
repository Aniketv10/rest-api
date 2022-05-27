const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentapi', {
}).then( () => {
    console.log('connection successful....!');
}).catch((error) => {
    console.log('connection unsuccessful....!');
})