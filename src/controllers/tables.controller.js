const notesCtrl = {};

notesCtrl.getTables = (req, res) => res.json({message: []});

notesCtrl.createTables = (req, res) => res.json({message: 'Table Saved'});

notesCtrl.getTable = (req, res) => res.json({title: 'wnfj job'});

notesCtrl.updateTables = (req, res) => res.json({message: 'Table Updated'});

notesCtrl.deleteTables = (req, res) => res.json({message: 'Table Deleted'});

module.exports = notesCtrl;