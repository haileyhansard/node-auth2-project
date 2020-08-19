const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middlewares");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ data: users });
        })
        .catch(err => res.send(err));
});

router.put("/:id", restricted, (req, res) => {
    res.status(200).json({ hello: 'You Made It!' });
});


module.exports = router;
