const db = require("../dataBase/db");
const { NOTES } = require('../dataBase')
module.exports = {
    add: async (req, res, next) => {
        try {
            const { title } = req.body;
            await db("task").insert({ title });
            // await NOTES.create({title}); or
            res.status(200).json('ok')
        } catch (e) {
            next(e);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const user = await db('task').select().from("task");
            // const user = await NOTES.find({});
            res.json(user)
        } catch (e) {
            next(e)
        }
    },
    update: async (req, res, next) => {
        try {
            const {data:{id}, position} = req.body;
            await db('task').where('id', id).update({ position });
            // await NOTES.updateOne({_id:id},{position});
            res.json("ok");
        } catch (e) {
            next(e);
        }
    }

}