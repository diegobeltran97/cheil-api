const Hotel = require("../models/hotels.model");
const multer = require('multer');
const path = require('path');
const imageFilter = function(req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
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
      const result = [];
      
       data.forEach(element => {
         result.push({
           id: element.id,
           name_hotel: element.name_hotel,
           price_hotel:element.price_hotel,
           category: element.category,
           raiting: element.raiting,
           image_hotel: element.image_hotel
         })
       });

    
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


exports.getByPrice = (req, res) => {
  Hotel.getByPrice(req.params.order, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hotels."
      });
    else res.send(data);
  });
};

exports.addHotel = (req, res) => {

   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  let upload = multer({ storage: storage, fileFilter: imageFilter }).single('fileName');
       

    upload(req, res, function(err) {
      const { hotel_nombre, precio, categoria, puntos } = req.body;
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any
    
      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      else if (!req.file) {
          return res.send('Please select an image to upload');
      }
      else if (err instanceof multer.MulterError) {
          return res.send(err);
      }
      else if (err) {
          return res.send(err);
      }
     
        const hotelObject = {
        name_hotel: hotel_nombre,
        price: precio,
        category: categoria,
        raiting: puntos,
        image: req.file.filename
      }
      Hotel.create(hotelObject, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hotels."
        });
       
        else res.send('Hotel succesfully Created!');
    });
    });

    


    

};







// Update a Tutorial identified by the id in the request


