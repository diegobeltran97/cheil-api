const sql = require("../services/db");

// constructor
const Hotel = {}

Hotel.getAll = (result) => {
  let query = "SELECT hotel.id_hotel as id , name_hotel, price_hotel, category, \
               images.image as image_hotel, cr.raiting FROM db_hotels.hotel as hotel \
               INNER JOIN image_hotel as images ON hotel.id_hotel = images.id_hotel \
               INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel ";


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

   
    result(null, res);
  });
};

Hotel.getByCategory = (category, result) => {
  sql.query(
    "SELECT hotel.id_hotel, name_hotel, price_hotel, category, images.image, cr.raiting FROM db_hotels.hotel as hotel \
     INNER JOIN image_hotel as images ON hotel.id_hotel = images.id_hotel INNER JOIN customer_ratings cr  ON hotel.id_hotel = cr.id_hotel \
     where category = ?;",[category],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      
      result(null, res);
    }
  );
};

Hotel.getByRaiting = (raiting, result) => {
  sql.query(
    "SELECT hotel.id_hotel, name_hotel, price_hotel, category, images.image, cr.raiting FROM db_hotels.hotel as hotel \
    INNER JOIN image_hotel as images ON hotel.id_hotel = images.id_hotel INNER JOIN customer_ratings cr \
    ON hotel.id_hotel = cr.id_hotel  where cr.raiting = ?;",[raiting],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      
      result(null, res);
    }
  );
};

Hotel.getByPrice = (order, result) => {
  if (order == 1) {
    sql.query(
      "SELECT hotel.id_hotel, name_hotel, price_hotel, category, images.image, cr.raiting FROM db_hotels.hotel as hotel \
       INNER JOIN image_hotel as images ON hotel.id_hotel = images.id_hotel \
       INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel \
       ORDER BY hotel.price_hotel DESC", [order], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        
        result(null, res);
      }
    );
  } else  {
    sql.query(
      "SELECT hotel.id_hotel, name_hotel, price_hotel, category, images.image, cr.raiting FROM db_hotels.hotel as hotel \
       INNER JOIN image_hotel as images ON hotel.id_hotel = images.id_hotel \
       INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel \
       ORDER BY hotel.price_hotel", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        
        result(null, res);
      }
    );
  }
 
};


module.exports = Hotel;