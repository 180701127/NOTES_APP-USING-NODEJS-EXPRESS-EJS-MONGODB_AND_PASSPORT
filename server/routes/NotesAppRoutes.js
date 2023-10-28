const express = require('express');
const router = express.Router();
const NotesController = require('../controllers/MainNotesAppController');

/**
 * App Routes
 */

router.get('/', NotesController.Homepage);
router.get('/about', NotesController.about);


module.exports = router;
