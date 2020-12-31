var express = require('express');
var router = express.Router();

var db = require('../config/db')

//register user
router.post('/register', async function (req, res) {
  try {
    const { email, name, password } = req.body;
    let query = `SELECT * FROM user WHERE email = '${email}'`;
    const checkForData = 'SELECT COUNT(*) as count FROM user';
    db.query(checkForData, (err, respo) => {
      console.log('sds');
      if (err) {
        console.log('sd');
        return res.json({ status: 500, msg: 'error while fetching data', err: err })
      }
      else {
        respo = JSON.parse(JSON.stringify(respo))
        if (respo[0].count !== 0) {
          db.query(query, (err, result) => {
            if (err) {
              return res.json({ status: 500, msg: 'error while querying data', err: err })
            }
            else {
              if (result.length > 0) {
                return res.json({ status: 400, msg: 'User is already exists' })
              }
              else {

                let query = `INSERT INTO user (name, email, password, coins) VALUES ('${name}',  '${email}' , '${password}', 0 )`;
                db.query(query, (err, result) => {
                  if (err) {
                    return res.json({ status: 500, msg: 'error while adding user', err: err })
                  }
                  else {
                    return res.json({ status: 200, msg: 'User register sucessfully', data: result })
                  }
                });
              }
            }
          });
        }
      }

    })
  } catch (error) {
    return res.json({ status: 500, msg: 'error while adding user', err: error })
  }

});


//get all countries
router.get('/countries', async function (req, res) {
  try {
    let query = 'SELECT * from country';
    db.query(query, async function (err, result) {

      if (err) {
        return res.json({ status: 500, msg: 'error while querying countries', err: err })
      }
      else {
        console.log('result', result);
        return res.json({ status: 200, msg: 'Countries fetched sucessfully', data: result });
      }
    })
  } catch (error) {
    return res.json({ status: 500, msg: 'error while fetching countries', err: error })
  }
});


//login user
router.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    if (email === undefined || email === null || email === "") {
      return res.json({ status: 400, msg: 'Please enter email' })
    }

    if (password === undefined || password === null || password === "") {
      return res.json({ status: 400, msg: 'Please enter password' })
    }

    let query = `select * from user where email='${email}' and password='${password}'`;
    db.query(query, async function (err, result) {
      if (err) {
        return res.json({ status: 500, msg: 'Error while querying ', err: err })
      }
      else if (!result.length) {
        return res.json({ status: 400, msg: 'Email or Password Invalid ,Try again later ', user: null })
      }
      else {
        return res.json({ status: 200, msg: 'User loggedin sucessfully ', user: result[0] })
      }
    });

  } catch (error) {
    return res.json({ status: 500, msg: 'error while login ', err: error })
  }
})

module.exports = router;
