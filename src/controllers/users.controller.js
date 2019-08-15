const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: []});

usersCtrl.createUsers = (req, res) => res.json({message: 'User Saved'});

usersCtrl.getUser = (req, res) => res.json({title: 'wnfj job'});

usersCtrl.updateUsers = (req, res) => res.json({message: 'User Updated'});

usersCtrl.deleteUsers = (req, res) => res.json({message: 'User Deleted'});

module.exports = usersCtrl;