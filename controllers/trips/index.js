const tripsService = require('../../services/trips/index');

exports.listTrips = (req, res) => {
  const trips = tripsService.getAllTrips();
  res.render('trips/index', { title: 'My Trips', trips });
};

exports.showCreateForm = (req, res) => {
  res.render('trips/create', { title: 'Add New Trip' });
};

exports.createTrip = (req, res) => {
  tripsService.createTrip(req.body);
  res.redirect('/trips');
};

exports.showEditForm = (req, res) => {
  const trip = tripsService.getTripById(req.params.id);
  res.render('trips/edit', { title: 'Edit Trip', trip });
};

exports.updateTrip = (req, res) => {
  tripsService.updateTrip(req.params.id, req.body);
  res.redirect('/trips');
};

exports.deleteTrip = (req, res) => {
  tripsService.deleteTrip(req.params.id);
  res.redirect('/trips');
};