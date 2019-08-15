const Table = require('../models/Table');

const notesCtrl = {};


notesCtrl.getTables = async (req, res) => {
    const tables = await Table.find();
    res.json({tables})
}

notesCtrl.createTables = async (req, res) => {
    const{ title, concept, users, content, author, date } = req.body;
    const newTable = new Table({
        title,
        concept,
        users,
        content,
        author,
        date

    });
    await newTable.save();
    res.json({message: 'Table Saved'})
}

notesCtrl.getTable = async (req, res) => {
    const table = await Table.findById( req.params.id );
    console.log(table)
    res.json(table)
}

notesCtrl.updateTables = async (req, res) => {
    const { title, concept, users, content, author } = req.body;
     await Table.findByIdAndUpdate( req.params.id  , {
        title,
        concept,
        users,
        content,
        author
    })
     res.json({message: 'Table Updated'})
}

notesCtrl.deleteTables = async (req, res) => {
    await Table.findByIdAndDelete(req.params.id);
    res.json({message: 'Table Deleted'})
}

module.exports = notesCtrl;