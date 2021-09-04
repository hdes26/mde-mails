const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const sendMail = require('./src/routes/sendMail');
//const miLogin = require('./src/routes/login');


//settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/email', sendMail);


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
