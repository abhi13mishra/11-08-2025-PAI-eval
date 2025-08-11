const  express = require('express');
const  mongoose = require('mongoose');
const  dotenv = require('dotenv');
const  logger = require('../middleware/logger');

const publisherRoutes = require('../routes/publisherRoutes');
const gameRoutes = require('../routes/gameRoutes');

dotenv .config();
const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/publisher', publisherRoutes);
app.use('api/games', gameRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});


