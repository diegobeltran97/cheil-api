const Hotel = require("../models/hotels.model");
// Delete all hotels from the database.
exports.getAll = (req, res) => {

  //logic
  Hotel.getAll( (err, data) => {
    
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hotels."
      });
    else {
      
       res.send(data); 
      
      }
  });

 
};

exports.getbyCategory = (req, res) => {
  Hotel.getByCategory(req.params.category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hotels."
      });
    else res.send(data);
  });
};


exports.getbyRating = (req, res) => {
  Hotel.getByRaiting(req.params.raiting, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hotels."
      });
    else res.send(data);
  });
};


exports.getbyRating = (req, res) => {
  Hotel.getByPrice(req.params.order, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hotels."
      });
    else res.send(data);
  });
};

// Create and Save a new Hotel
exports.create = (req, res) => {
  
};

// Retrieve all Hotel from the database (with condition).
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  
};


// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all hotels from the database.
exports.deleteAll = (req, res) => {
  
};

