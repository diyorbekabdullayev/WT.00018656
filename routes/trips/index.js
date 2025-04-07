const express = require('express');
const router = express.Router();
const tripsController = require('../../controllers/trips/index');

router.get('/', tripsController.listTrips);
router.get('/create', tripsController.showCreateForm);
router.post('/create', tripsController.createTrip);
router.get('/:id/edit', tripsController.showEditForm);
router.post('/:id/edit', tripsController.updateTrip);
router.post('/:id/delete', tripsController.deleteTrip);

module.exports = router;
