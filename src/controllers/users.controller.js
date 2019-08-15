const User = require('../models/User');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

usersCtrl.createUsers = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User Created')
}

usersCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('User Deleted')
}

module.exports = usersCtrl;