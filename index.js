require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is running on port ${port} for Auth2 Project`));

//Note to self: I accidentally created the db3 file as 'database.users.db3' instead of the / which would have created the file user.db3 inside the directory database

