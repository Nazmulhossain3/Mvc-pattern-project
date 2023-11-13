const path = require('path');
const users = require('../models/users.Model'); // Corrected the import statement

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'));
}

exports.saveUsers = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);

    const user = {
        name,
        age,
    };

    users.push(user);
    res.send(users); // You might want to send a response back to the client.
}
