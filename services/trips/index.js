let trips = [
    { id: '1', title: 'Paris Trip', location: 'Paris', experience: 'Visited Eiffel Tower' },
    { id: '2', title: 'London Adventure', location: 'London', experience: 'Explored British Museum' },
  ];
  
  exports.getAllTrips = () => trips;
  
  exports.getTripById = (id) => trips.find(trip => trip.id === id);
  
  exports.createTrip = (tripData) => {
    const newTrip = {
      id: (trips.length + 1).toString(),
      title: tripData.title,
      location: tripData.location,
      experience: tripData.experience
    };
    trips.push(newTrip);
  };
  
  exports.updateTrip = (id, updatedData) => {
    const trip = trips.find(trip => trip.id === id);
    if (trip) {
      trip.title = updatedData.title;
      trip.location = updatedData.location;
      trip.experience = updatedData.experience;
    }
  };
  
  exports.deleteTrip = (id) => {
    trips = trips.filter(trip => trip.id !== id);
  };
  