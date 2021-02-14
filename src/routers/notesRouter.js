const express = require ('express');
const router = express.Router();

const notesController = require ('../controllers/notesController')

router.get ('/', notesController.home);

router.post('/', notesController.save);


router.get ('/edit/:id', notesController.edit);
router.post('/edit/:id', notesController.update);

router.post('/:id', notesController.delete)

module.exports = router;

