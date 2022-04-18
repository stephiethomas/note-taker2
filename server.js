
const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3001

const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

//Express middleware
app.use(express.urlencoded({ extended: false}));

//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
//trying to push