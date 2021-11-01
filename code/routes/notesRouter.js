const router = require('express').Router();

const {notesControler} = require('../controllers')

router.post('/add', notesControler.add);
router.get('/getAll', notesControler.getAll);
router.post('/update', notesControler.update);

module.exports = router;
