const sql = require("../services/db");

// constructor
const Hotel = {}

Hotel.getAll = (result) => {
  let query = "SELECT hotel.id_hotel, name_hotel, price_hotel, category, cr.raiting,\ (SELECT image_hotel.image as image FROM image_hotel WHERE hotel.id_hotel = image_hotel.id_hotel \
  limit 1) as image FROM hotel INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel ";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }

   
    result(null, res);
  });
};



Hotel.create = (newHotel, result) => {



  sql.query("INSERT INTO hotel (name_hotel, price_hotel, category) VALUES(?,?,?)", 
  [newHotel.name_hotel, newHotel.price, newHotel.category], (err, res) => {
    if (err) {
      console.log("error in table hotel: ", err);
      result(err, null);
      return;
    }

    const id = res.insertId;
    sql.query(
      "INSERT INTO db_hotels.image_hotel (image, id_hotel) VALUES(?, ?);",
      [newHotel.image,id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        
        sql.query(
          "INSERT INTO db_hotels.customer_ratings (raiting, id_hotel) VALUES(?, ?)",
          [newHotel.raiting,id],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
      
            
            result(null, res);
          }
        );
      }
    );

 
   
  });
};


Hotel.getByCategory = (category, result) => {
  sql.query(
    "SELECT hotel.id_hotel, name_hotel, price_hotel, category, cr.raiting,\ (SELECT image_hotel.image as image FROM image_hotel WHERE hotel.id_hotel = image_hotel.id_hotel \
      limit 1) as image FROM hotel INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel \
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
    "SELECT hotel.id_hotel, name_hotel, price_hotel, category, cr.raiting , (SELECT image_hotel.image as image FROM image_hotel \
    WHERE hotel.id_hotel = image_hotel.id_hotel limit 1) as image FROM hotel INNER JOIN customer_ratings cr ON hotel.id_hotel = cr.id_hotel \
    where cr.raiting = ? ;",[raiting],
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