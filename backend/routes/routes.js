const express = require('express');
const router = express.Router();
const db = require("../config/database");

router.get("/", function(req, res) {
    const sql = `SELECT * FROM d_collection_book`;
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        console.log(data);
        res.json({
            status: 200,
            data
        })
    })
})

// create new user
router.post('/new', function(req, res) {
  let sql = {
      query: `INSERT INTO d_collection_book(judul, pengarang, harga, stok) VALUES (?, ?, ?, ?)`,
      params: [
        req.body.judul,
        req.body.pengarang, 
        req.body.harga, 
        req.body.stok,
      ]
  }
  db.query(sql.query, sql.params, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

router.post('/update/:id', function(req, res) {
  let sql = {
      query: `UPDATE d_collection_book SET judul = ?, pengarang = ?, harga = ?, stok = ? WHERE id = ?`,
      params: [
          req.body.judul,
          req.body.pengarang, 
          req.body.harga, 
          req.body.stok,
          req.params.id
        ]
  }

  db.query(sql.query, sql.params, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user updated successfully"
    })
  })
});

router.delete('/delete/:id', function(req, res) {
  let sql = {
      query: `DELETE FROM d_collection_book WHERE id = ?`,
      params: [req.params.id]
  }
  
  db.query(sql.query, sql.params, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "User deleted successfully"
    })
  })
});

module.exports = router;