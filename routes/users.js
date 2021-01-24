var express = require('express');
var router = express.Router();

var db = require('../config/db')

const countryModel = require('../models/countries');
const userModel = require('../models/users');
const dummyUsersModel = require('../models/dummy_users');
const videoModel = require('../models/videos');
const visitorModel = require('../models/visitor');
const msgModel = require('../models/messages');
const userMsgModel = require('../models/userMessages')
//register user -mysql
// router.post('/register', async function (req, res) {
//   try {
//     const { email, name, password } = req.body;
//     let query = `SELECT * FROM user WHERE email = '${email}'`;
//     const checkForData = 'SELECT COUNT(*) as count FROM user';
//     db.query(checkForData, (err, respo) => {
//       console.log('sds');
//       if (err) {
//         console.log('sd');
//         return res.json({ status: 500, msg: 'error while fetching data', err: err })
//       }
//       else {
//         respo = JSON.parse(JSON.stringify(respo))
//         if (respo[0].count !== 0) {
//           db.query(query, (err, result) => {
//             if (err) {
//               return res.json({ status: 500, msg: 'error while querying data', err: err })
//             }
//             else {
//               if (result.length > 0) {
//                 return res.json({ status: 400, msg: 'User is already exists' })
//               }
//               else {

//                 let query = `INSERT INTO user (name, email, password, coins) VALUES ('${name}',  '${email}' , '${password}', 0 )`;
//                 db.query(query, (err, result) => {
//                   if (err) {
//                     return res.json({ status: 500, msg: 'error while adding user', err: err })
//                   }
//                   else {
//                     return res.json({ status: 200, msg: 'User register sucessfully', data: result })
//                   }
//                 });
//               }
//             }
//           });
//         }
//       }

//     })
//   } catch (error) {
//     return res.json({ status: 500, msg: 'error while adding user', err: error })
//   }

// });


//get all countries -mysql
// router.get('/countries', async function (req, res) {
//   try {
//     let query = 'SELECT * from country';
//     db.query(query, async function (err, result) {

//       if (err) {
//         return res.json({ status: 500, msg: 'error while querying countries', err: err })
//       }
//       else {
//         console.log('result', result);
//         return res.json({ status: 200, msg: 'Countries fetched sucessfully', data: result });
//       }
//     })
//   } catch (error) {
//     return res.json({ status: 500, msg: 'error while fetching countries', err: error })
//   }
// });


//login user -mysql
// router.post('/login', async function (req, res) {
//   try {
//     const { email, password } = req.body;
//     if (email === undefined || email === null || email === "") {
//       return res.json({ status: 400, msg: 'Please enter email' })
//     }

//     if (password === undefined || password === null || password === "") {
//       return res.json({ status: 400, msg: 'Please enter password' })
//     }

//     let query = `select * from user where email='${email}' and password='${password}'`;
//     db.query(query, async function (err, result) {
//       if (err) {
//         return res.json({ status: 500, msg: 'Error while querying ', err: err })
//       }
//       else if (!result.length) {
//         return res.json({ status: 400, msg: 'Email or Password Invalid ,Try again later ', user: null })
//       }
//       else {
//         return res.json({ status: 200, msg: 'User loggedin sucessfully ', user: result[0] })
//       }
//     });

//   } catch (error) {
//     return res.json({ status: 500, msg: 'error while login ', err: error })
//   }
// })


//social login -mysql
// router.post('/socialLogin', async function (req, res) {
//   try {
//     let { name, email, socialId, authToken, imgUrl } = req.body;
//     let checkExisitingUser = ''
//     if (authToken) {
//       if (email) {
//         checkExisitingUser = `select * from user where email='${email}'`;
//       }
//       else if (socialId) {
//         checkExisitingUser = `select * from user where user_id='${socialId}'`;
//       }

//       db.query(checkExisitingUser, async function (err, result) {
//         if (err) {
//           return res.json({ msg: 'error while querying data', err: err });
//         }
//         else {
//           if (result.length) {
//             result = JSON.parse(JSON.stringify(result))

//             const id = result[0].id;
//             let updateQuery = `UPDATE  user SET  name='${name}',email='${email}',user_id='${socialId}', img_url='${imgUrl}',auth_token='${authToken}'  where id=${id}`;
//             db.query(updateQuery, async function (err, result) {
//               if (err) {
//                 return res.json({ status: 500, msg: 'error while updating social profile', err: err });
//               }
//               else {
//                 let query = `select * from user where id=${id}`;
//                 db.query(query, async function (err, result) {
//                   if (err) {
//                     return res.json({ msg: 'error while updating social profile', err: err });
//                   }
//                   else {
//                     result = JSON.parse(JSON.stringify(result))
//                     return res.json({ status: 200, msg: 'Social Login Sucessful', data: result[0] });
//                   }
//                 });
//               }
//             })
//           }
//           else {
//             let query = `INSERT INTO user (name,email,user_id,auth_token,img_url) VALUES ('${name}','${email}',  '${socialId}' , '${authToken}', '${imgUrl}' )`;
//             db.query(query, async function (err, result) {
//               if (err) {
//                 return res.json({ msg: 'error while updating social profile', err: err });
//               }
//               else {
//                 let id = result.insertId;
//                 let query = `select * from user where id=${id}`;
//                 db.query(query, async function (err, respo) {
//                   if (err) {
//                     return res.json({ msg: 'error while updating social profile', err: err });
//                   }
//                   else {
//                     respo = JSON.parse(JSON.stringify(respo))
//                     return res.json({ status: 200, msg: 'Social Login Sucessful', data: respo[0] });
//                   }
//                 });
//               }
//             });
//           }
//         }
//       });
//     }
//     else {
//       return res.json({ status: 400, msg: 'Please provide auth token' })
//     }
//   } catch (error) {
//     return res.json({ status: 500, msg: 'Error in social login', err: error })
//   }
// });


//get videos -mysql
// router.get('/video', async function (req, res) {
//   try {
//     const query = 'select * from video';
//     db.query(query, async function (err, result) {
//       if (err) {
//         return res.json({ status: 500, msg: 'Error while querying data', err: err });
//       }
//       else {
//         result = JSON.parse(JSON.stringify(result));

//         if (result.length === 0) {
//           return res.json({ status: 200, msg: 'No videos found.', data: null });
//         }
//         else {
//           return res.json({ status: 200, msg: 'Videos fetched sucessfully', data: result });
//         }
//       }

//     })
//   } catch (error) {
//     return res.json({ status: 500, msg: 'Error while fetching videos', err: error })
//   }
// });


//Random video -mysql
// router.get('/randomVideo', async function (req, res) {
//   try {
//     let { random } = req.query;
//     if (random && random === "video") {
//       const query = 'select * from video';
//       db.query(query, function (err, result) {
//         if (err) {
//           return res.json({ status: 500, msg: 'Error while querying data', data: null })
//         }
//         else {
//           result = JSON.parse(JSON.stringify(result));
//           if (result.length === 0) {
//             return res.json({ status: 200, msg: 'Oops , There is no video found !!', data: null })
//           }
//           else {
//             const firstRandomElement = result[Math.floor(Math.random() * result.length)];
//             return res.json({ status: 200, msg: 'Video fetched sucessfully', data: firstRandomElement })
//           }
//         }

//       })
//     }
//     else {
//       return res.json({ status: 400, msg: 'Please enter valid key' })
//     }

//   } catch (error) {
//     return res.json({ status: 500, msg: 'Error while getting random video', err: error })
//   }
// })

//get users by all counteriess or by specific country -mysql
// router.get('/', async function (req, res) {
//   try {
//     const { country } = req.body;
//     if (country && country !== '') {

//     }
//     else {
//       let uniqueId = Math.floor(100000 + Math.random() * 900000);
//       uniqueId.toString();
//       let countryQuery = 'select * from country';
//       db.query(countryQuery, async function (err, respo) {
//         if (err) {
//           return res.json({ status: 500, msg: 'Error while querying data ', err: err });
//         } else {
//           respo = JSON.parse(JSON.stringify(respo));
//           let randomCountry = respo[Math.floor(Math.random() * respo.length)];
//           randomCountry = JSON.stringify(randomCountry)
//           // randomCountry = randomCountry.toString();
//           let query = 'select * from dummy_users';
//           db.query(query, async function (err, data) {
//             if (err) {
//               return res.json({ status: 500, msg: 'Error while querying data ', err: err });
//             } else {
//               data = JSON.parse(JSON.stringify(data));
//               for (let obj of data) {
//                 console.log('random', randomCountry)

//                 let query = `update  dummy_users set unique_id='${uniqueId}',country='${randomCountry}' where id=${obj.id} `;
//                 db.query(query, async function (err, data) {
//                   if (err) {
//                     return res.json({ status: 500, msg: 'Error while querying data ', err: err });
//                   } else {
//                     console.log('sdsff')
//                   }
//                 })
//               }
//             }
//           })
//         }
//       })


//     }
//   } catch (error) {
//     return res.json({ status: 500, msg: 'Error while fetching users', err: error });
//   }
// });


//fill data in dummy_users table -mysql
// router.post('/', async function (req, res) {
//   try {
//     let uniqueId = Math.floor(100000 + Math.random() * 900000);
//     let countryQuery = 'select * from country';
//     db.query(countryQuery, async function (err, respo) {
//       if (err) {
//         return res.json({ status: 500, msg: 'Error while querying data ', err: err });
//       }
//       else {
//         respo = JSON.parse(JSON.stringify(respo));
//         if (respo.length) {
//           let statusArray = [0, 1];
//           let namesArray = ["pooja", "rita", "rashmi", "ketki", "mira", "sushma", "angelina", "katrina", "priyanka", "sonali"]
//           let morePicsArray = ['https://media.gettyimages.com/photos/high-fashion-model-woman-in-colorful-bright-lights-posing-in-studio-picture-id926617828?s=2048x2048',
//             'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
//             'https://images.pexels.com/photos/245931/pexels-photo-245931.jpeg',
//             'https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg',
//             'https://images.pexels.com/photos/922472/pexels-photo-922472.jpeg',
//             'https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg',
//             'https://images.pexels.com/photos/1020053/pexels-photo-1020053.jpeg',
//             'https://images.pexels.com/photos/1020053/pexels-photo-1020053.jpeg',
//             'https://images.pexels.com/photos/3470076/pexels-photo-3470076.jpeg',
//             'https://images.pexels.com/photos/1104062/pexels-photo-1104062.jpeg',
//             'https://images.pexels.com/photos/3819577/pexels-photo-3819577.jpeg',
//             'https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg',
//             'https://images.pexels.com/photos/1927220/pexels-photo-1927220.jpeg',
//             'https://images.pexels.com/photos/1777689/pexels-photo-1777689.jpeg',
//             'https://images.pexels.com/photos/971267/pexels-photo-971267.jpeg',
//             'https://images.pexels.com/photos/919613/pexels-photo-919613.jpeg',
//             'https://images.pexels.com/photos/769584/pexels-photo-769584.jpeg',
//             'https://images.pexels.com/photos/3647016/pexels-photo-3647016.jpeg',
//             'https://images.pexels.com/photos/1850139/pexels-photo-1850139.jpeg'
//           ]
//           let status = statusArray[Math.floor(Math.random() * statusArray.length)];
//           let randomCountry = respo[Math.floor(Math.random() * respo.length)];
//           let randomProfilePic = morePicsArray[Math.floor(Math.random() * morePicsArray.length)];
//           let randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
//           let dummyUserObj = {};
//           dummyUserObj.unique_id = uniqueId;
//           dummyUserObj.status = status;
//           dummyUserObj.profile_pic = randomProfilePic;
//           dummyUserObj.coins = 0;
//           dummyUserObj.likes = 0;
//           dummyUserObj.country = randomCountry;
//           dummyUserObj.more_pics = morePicsArray;
//           dummyUserObj.name = randomName;
//           dummyUserObj.bio = "demo bio.."
//           dummyUserObj.stickers = ['https://image.shutterstock.com/image-vector/smile-more-hand-drawn-lettering-260nw-1423055819.jpg',
//             "https://image.shutterstock.com/image-vector/comic-speech-bubbles-set-different-600w-521151811.jpg",
//             "https://image.shutterstock.com/image-vector/fashion-quirky-cartoon-doodle-patch-260nw-482201029.jpg"
//           ];

//           dummyUserObj.stickers = JSON.stringify(dummyUserObj.stickers);
//           dummyUserObj.more_pics = JSON.stringify(dummyUserObj.more_pics);
//           for (let i = 0; i < 100; i++) {
//             let query = `INSERT INTO dummy_users (name, unique_id, profile_pic, bio,coins,likes,country,more_pics,stickers,status) VALUES ('${dummyUserObj.name}',  '${dummyUserObj.user_id}' , '${dummyUserObj.profile_pic}','${dummyUserObj.bio}','${dummyUserObj.coins}','${dummyUserObj.likes}' ,'${dummyUserObj.country}','${dummyUserObj.more_pics}','${dummyUserObj.stickers}','${dummyUserObj.status}' )`;
//             db.query(query, async function (err, data) {
//               if (err) {
//                 return res.json({ status: 500, msg: 'error while inserting data', err: err })
//               }
//               else {
//                 return res.json({ status: 200, msg: 'Records Inserted sucessfully' });
//               }
//             });
//           }
//         }
//       }
//     })
//   } catch (error) {
//     return res.json({ status: 500, msg: 'Error while adding data to dummy_users', err: error });
//   }
// })


//register -mongodb
router.post('/register', async function (req, res) {
  try {
    const { email, name, password, androidToken } = req.body;
    if (password === null || password === " " || password === null) {
      return res.json({ status: 400, msg: 'Please enter password' })
    }
    if (email === null || email === " " || email === null) {
      return res.json({ status: 400, msg: 'Please enter email' })
    }
    const userCheck = await userModel.findOne({ email: email }).lean().exec();
    if (userCheck === undefined || userCheck === null) {
      let addedUser = await userModel.create({ email, name, password, androidToken });
      if (addedUser._id) {
        if (!addedUser.hasOwnProperty('coins')) {
          addedUser.coins = 0;
        }
        if (!addedUser.hasOwnProperty('amount')) {
          addedUser.amount = 0;
        }

        if (!addedUser.hasOwnProperty('img_url')) {
          addedUser.img_url = null;
        }
        return res.json({ status: 200, msg: 'User register sucessfully', data: addedUser })
      }
      else {
        return res.json({ status: 500, msg: 'User not  registered' })
      }
    }
    else {
      return res.json({ status: 400, msg: 'User is already exists' })
    }

  } catch (error) {
    return res.json({ status: 500, msg: 'error while adding user', err: error.message })
  }
});

//login -mongodb
router.post('/login', async function (req, res) {
  try {
    const { email, password, androidToken } = req.body;
    if (email === undefined || email === null || email === "") {
      return res.json({ status: 400, msg: 'Please enter email' })
    }

    if (password === undefined || password === null || password === "") {
      return res.json({ status: 400, msg: 'Please enter password' })
    }
    let user = await userModel.findOne({ email: email, password: password }).lean().exec();
    if (user === undefined || user === null) {
      return res.json({ status: 400, msg: 'Email or Password Invalid ,Try again later ' })
    } else {
      await userModel.updateOne({ _id: user._id }, {
        androidToken: androidToken
      });

      let updatedUser = await userModel.findOne({ _id: user._id }).lean().exec();
      if (!updatedUser.hasOwnProperty('coins')) {
        updatedUser.coins = 0;
      }

      if (!updatedUser.hasOwnProperty('img_url')) {
        updatedUser.img_url = null;
      }
      return res.json({ status: 200, msg: 'User loggedin sucessfully ', user: updatedUser })
    }


  } catch (error) {
    return res.json({ status: 500, msg: 'error while login ', err: error })
  }
})

//get countries -mongodb
router.get('/countries', async function (req, res) {
  try {
    const countries = await countryModel.find({}).lean().exec();
    if (!countries.length) {
      return res.json({ status: 500, msg: 'Countires not found ' })
    }
    else {
      return res.json({ status: 200, msg: 'Countires fetched sucessfully', data: countries })
    }
  } catch (error) {
    return res.json({ status: 500, msg: 'error while fetching countries ', err: error.message })
  }

});


//function to update social login
async function updateUser(id, name, email, userId, imgUrl, androidToken) {
  const updatedUser = await userModel.findOne({ _id: id }).lean().exec();
  updatedUser.name = name;
  updatedUser.email = email;
  updatedUser.user_id = userId;
  updatedUser.img_url = imgUrl;
  // updatedUser.auth_token = authToken;
  updatedUser.androidToken = androidToken;
  await updatedUser;
  return updatedUser;
}

//Social login -mongodb
router.post('/socialLogin', async function (req, res) {
  try {
    let { name, email, socialId, imgUrl, androidToken } = req.body;
    let checkExisitingUser = null;;

    if (email) {
      checkExisitingUser = await userModel.findOne({ email: email }).lean().exec();
      if (checkExisitingUser === null) {
        console.log('sfdafsfds');
        let socialUserAdded = await userModel.create({ name: name, email: email, user_id: socialId, img_url: imgUrl, androidToken: androidToken });
        if (!socialUserAdded.hasOwnProperty('coins')) {
          socialUserAdded.coins = 0;
        }

        if (!socialUserAdded.hasOwnProperty('amount')) {
          socialUserAdded.amount = 0;
        }
        return res.json({ status: 200, msg: 'Social Login Sucessful', data: socialUserAdded });
      }
      else {
        let updatedUser = await updateUser(checkExisitingUser._id, name, email, socialId, imgUrl, androidToken)
        console.log('updatedUser', updatedUser);
        if (!updatedUser.hasOwnProperty('coins')) {
          updatedUser.coins = 0;
        }

        if (!updatedUser.hasOwnProperty('amount')) {
          updatedUser.amount = 0;
        }
        return res.json({ status: 200, msg: 'Social Login Sucessful', data: updatedUser });
      }
    }
    else if (socialId) {
      checkExisitingUser = await userModel.findOne({ user_id: socialId }).lean().exec();
      if (checkExisitingUser === null) {
        let socialUserAdded = await userModel.create({ name: name, email: email, user_id: socialId, img_url: imgUrl, auth_token: authToken, androidToken: androidToken });
        if (!socialUserAdded.hasOwnProperty('coins')) {
          socialUserAdded.coins = 0;
        }
        if (!socialUserAdded.hasOwnProperty('amount')) {
          socialUserAdded.amount = 0;
        }

        return res.json({ status: 200, msg: 'Social Login Sucessful', data: socialUserAdded });
      }
      else {
        let updatedUser = await updateUser(checkExisitingUser._id, name, email, socialId, authToken, imgUrl, androidToken)
        if (!updatedUser.hasOwnProperty('coins')) {
          updatedUser.coins = 0;
        }
        if (!updatedUser.hasOwnProperty('amount')) {
          updatedUser.amount = 0;
        }
        return res.json({ status: 200, msg: 'Social Login Sucessful', data: updatedUser });
      }
    }

  } catch (error) {
    return res.json({ status: 500, msg: 'Error in social login', err: error })
  }
});

//get videos -mongodb
router.get('/video', async function (req, res) {
  try {
    let pageNo = parseInt(req.query.pageNo);
    let pageNoNext = parseInt(req.query.pageNo) + 1;
    let limit = 5;
    let hasNext = false;
    pageNo = pageNo * limit;
    pageNoNext = pageNoNext * limit;


    let count = await videoModel.count();
    let users = await videoModel.find({}).skip(pageNo).limit(limit).lean()
    let user1 = await videoModel.find({}).skip(pageNoNext).limit(limit).lean()
    if (user1.length > 0) {
      hasNext = true;
    }

    return res.json({
      status: 200, msg: 'All Country users fetched sucessfully', data: {
        hasNext: hasNext, totalPage: Math.ceil(count / limit), totalVideos: count, currentPage: req.query.pageNo,
        videos: users
      }
    });


  } catch (error) {
    return res.json({ status: 500, msg: 'Error while fetching videos', err: error })
  }
});

//random video -mongodb
router.get('/randomVideo', async function (req, res) {
  try {
    let { random } = req.query;
    if (random && random === "video") {
      const videoData = await videoModel.find({}).lean().exec();
      if (videoData.length === 0) {
        return res.json({ status: 200, msg: 'Oops , There is no video found !!', data: null })
      }
      else {
        const firstRandomElement = videoData[Math.floor(Math.random() * videoData.length)];
        return res.json({ status: 200, msg: 'Video fetched sucessfully', data: firstRandomElement })
      }
    }
    else {
      return res.json({ status: 400, msg: 'Please enter valid key' })
    }

  } catch (error) {
    return res.json({ status: 500, msg: 'Error while getting random video', err: error })
  }
});

//get users by all countries or specific country
router.get('/dummyUser', async function (req, res) {
  try {
    const { country, matched } = req.query;
    let pageNo = parseInt(req.query.pageNo);
    let pageNoNext = parseInt(req.query.pageNo) + 1;
    let limit = 16;
    let hasNext = false;
    pageNo = pageNo * limit;
    pageNoNext = pageNoNext * limit;


    if (country === "All") {
      // const usersData = await dummyUsersModel.find({}).lean().exec();
      let count = await dummyUsersModel.count();
      let users = await dummyUsersModel.find({}).skip(pageNo).limit(limit).lean()
      let user1 = await dummyUsersModel.find({}).skip(pageNoNext).limit(limit).lean()
      if (user1.length > 0) {
        hasNext = true;
      }
      return res.json({
        status: 200, msg: 'All Country users fetched sucessfully', data: {
          hasNext: hasNext, totalPage: Math.ceil(count / limit), totalUsers: count, currentPage: req.query.pageNo,
          users: users
        }
      });
    }

    else if (matched === "Yes") {
      // const count = await dummyUsersModel.find({}).lean().exec();
      // const matchedRecords = db.collection.find().skip(db.collection.count() - N)

      const matchedRecord = await dummyUsersModel.aggregate([{ $sample: { size: 10 } }]);
      return res.json({ status: 200, msg: 'Matched  users fetch sucessfully', data: matchedRecord });
    }
    else {
      let users = await dummyUsersModel.find({ country: country }).skip(pageNo).limit(limit).lean()
      let user1 = await dummyUsersModel.find({ country: country }).skip(pageNoNext).limit(limit).lean()
      if (user1.length > 0) {
        hasNext = true;
      }
      const usersData = await dummyUsersModel.find({ country: country }).lean().exec();
      let count = usersData.length
      if (count > 0) {
        return res.json({
          status: 200, msg: 'Country wise Dummy users fetched sucessfully', data: {
            hasNext: hasNext, totalPage: Math.ceil(count / limit), totalUsers: count, currentPage: req.query.pageNo,
            users: users
          }
        });
      }
      else {
        return res.json({ status: 400, msg: `No users found for country -${country}` })
      }
    }
  } catch (error) {
    return res.json({ status: 500, msg: 'Error while getting random video', err: error })
  }

})


//Update points and lock details
router.post('/coins', async function (req, res) {
  try {
    let { coins, email, socialId, amount } = req.body;
    let checkForDetails = null;
    if (email !== undefined && email !== null) {
      checkForDetails = await userModel.findOne({ email: email }).lean().exec();
    }

    else if (socialId !== undefined && socialId !== null) {
      checkForDetails = await userModel.findOne({ user_id: socialId }).lean().exec();
      console.log('checkForDetails', checkForDetails);
    }


    if (checkForDetails !== undefined || checkForDetails !== null) {
      await userModel.update({ _id: checkForDetails._id },
        {
          coins: coins,
          amount: amount
        });

      const updatedData = await userModel.findOne({ _id: checkForDetails._id }).lean().exec();
      return res.json({ status: 200, msg: 'Coins added sucessfully', data: updatedData })
    }

    if (checkForDetails === null) {
      return res.json({ status: 400, msg: 'User details not found ' })
    }
  } catch (error) {
    return res.json({ status: 500, msg: 'Error while adding visitor point', err: error.message })
  }
});

//add visitor token
router.post('/visitor', async function (req, res) {
  try {
    const { androidToken } = req.body;
    const checkForTokenExists = await visitorModel.findOne({ androidToken: androidToken }).lean().exec();
    if (checkForTokenExists !== null) {
      await visitorModel.update({ _id: checkForTokenExists }, {
        androidToken: androidToken
      });
      const addedVisitor = await visitorModel.findOne({ _id: checkForTokenExists._id });
      return res.json({ status: 200, msg: 'Visitor updated sucessfully', addedVisitor: addedVisitor });
    }
    else {
      const addedVisitor = await visitorModel.create({ androidToken });
      return res.json({ status: 200, msg: 'Visitor added sucessfully', addedVisitor: addedVisitor });
    }

  } catch (error) {
    return res.json({ status: 500, msg: 'Error while adding visitor point', err: error })
  }
});

//coin update for user
router.put('/coin', async function (req, res) {
  try {
    const { email, socialId, coins } = req.body;
    let checkUser;
    if (email !== undefined || email !== '' || email !== undefined) {
      checkUser = await userModel.findOne({ email: email }).lean().exec();
    }

    if (socialId !== undefined || socialId !== '' || socialId !== undefined) {
      checkUser = await userModel.findOne({ user_id: socialId }).lean().exec();
    }

    if (checkUser !== undefined || checkUser !== null) {

      if (checkUser.coins >= coins) {
        await userModel.update({ _id: checkUser._id },
          {
            coins: 0,
          });
        const addedVisitor = await userModel.findOne({ _id: checkUser._id }).lean();
        return res.json({ status: 200, msg: 'Coin updated sucessfully', data: addedVisitor });
      }
      else {
        return res.json({ status: 400, msg: 'Insufficient coin' });
      }


    } else {
      return res.json({ status: 400, msg: 'User not found' });
    }

  } catch (error) {
    return res.json({ status: 500, msg: 'Error while updating coin for user ', err: error })
  }
});

//give coin and it's amount
router.get('/purchaseDetails', async function (req, res) {
  try {
    let obj = {
      coinFor50: 50,
      moneyFor50: 700,
      coinFor100: 150,
      moneyFor100: 1000,
      coinFor200: 30,
      moneyFor200: 1200,
      coinFor500: 60,
      moneyFor500: 1500,
    };

    return res.json({ status: 200, msg: ' Purchase deetails fetched sucessfully ', data: obj })
  } catch (error) {
    return res.json({ status: 500, msg: 'Error while getting purchase details ', err: error })
  }
});


//random user api
router.post('/randomUser', async function (req, res) {
  try {

    const userData = await dummyUsersModel.find({}).lean().exec();
    if (userData.length === 0) {
      return res.json({ status: 200, msg: 'Oops , There is no user found !!', data: null })
    }
    else {
      let firstRandomElement = userData[Math.floor(Math.random() * userData.length)];

      if (!firstRandomElement.hasOwnProperty('videoUrl')) {
        firstRandomElement.videoUrl = '';
      }

      if (!firstRandomElement.hasOwnProperty('coins')) {
        firstRandomElement.coins = 0;
      }

      if (!firstRandomElement.hasOwnProperty('likes')) {
        firstRandomElement.likes = 0;
      }

      if (!firstRandomElement.hasOwnProperty('bio')) {
        firstRandomElement.bio = '';
      }

      // console.log('data=>\n', firstRandomElement)

      return res.json({ status: 200, msg: 'User fetched sucessfully', data: firstRandomElement })
    }
  }

  catch (error) {
    return res.json({ status: 500, msg: 'Error while getting random user', err: error })
  }
});


//post multiple messages
router.post('/msgs', async function (req, res) {
  try {
    let msgObj = {};
    const allUsers = await dummyUsersModel.find({}).lean().exec();
    let msgTextArray = ['I am fine', 'What avout you ?', 'Call me.', 'Hello !', 'Hi ', 'How are you', "you're very cute.", "nice to see you", "I am waiting for your message.", "I like you.", "I think, i am in love with you.", "Hello Sweety", "Good night dear!!", "Good Morning dear.", "Nice to meet you dear.", "See you.", "Dating ?", "Catch me at coffee shop", "I am missing you.", "I am your friend"];

    let msgsArray = [];
    for await (let mUser of allUsers) {
      let msgData = Math.floor(Math.random() * msgTextArray.length);
      const randomMsg = msgTextArray[msgData]

      msgObj.profilePic = mUser.profile_pic;
      msgObj.name = mUser.name;
      msgObj.status = mUser.status;
      msgObj.msgText = randomMsg;
      let myMsg = {
        msg: msgObj
      }
      msgsArray.push(myMsg);
    }
    const data = await msgModel.insertMany(msgsArray);


    // let allMsgs = await msgModel.find({}).lean().exec();
    // for await (mMsg of allMsgs) {
    //   msgTextArray = msgTextArray.filter(msg => msg !== mMsg.msgText);

    //   await msgModel.findOneAndUpdate({ _id: mMsg._id },
    //     {
    //       $set:
    //       {
    //         msg:
    //         {
    //           allMessages: msgTextArray
    //         }
    //       }
    //     }).lean().exec();
    // }
    // let data = await msgModel.find({}).lean().exec();
    return res.json({ data: data })
    // return res.json({ datsa: data });
  } catch (e) {
    return res.json({ status: 500, msg: 'Error while adding bulk messages', err: e })
  }
});

//get multiple messages
router.get('/msgs', async function (req, res) {
  try {
    let allMsgs = await msgModel.find({}).lean().exec();
    // const allUsers = await dummyUsersModel.find({}).lean().exec();
    // let msgTextArray = ['I am fine', 'What avout you ?', 'Call me.', 'Hello !', 'Hi ', 'How are you', "you're very cute.", "nice to see you", "I am waiting for your message.", "I like you.", "I think, i am in love with you.", "Hello Sweety", "Good night dear!!", "Good Morning dear.", "Nice to meet you dear.", "See you.", "Dating ?", "Catch me at coffee shop", "I am missing you.", "I am your friend"];

    // let data = await msgModel.findOne({ "msg.msgText": { $ne: null } }).sort({ createdAt: -1 });
    // console.log('data', data);
    // await Promise.all(allMsgs.map(async (mMsg) => {
    //   let msgObj = {};
    //   let msgData = Math.floor(Math.random() * msgTextArray.length);
    //   const randomMsg = msgTextArray[msgData]
    //   msgObj.profilePic = "http://wallpaper-house.com/data/out/8/wallpaper2you_266336.jpg";
    //   msgObj.name = "Hiral";
    //   msgObj.status = false;
    //   msgObj.msgText = randomMsg;
    //   msgTextArray = msgTextArray.filter(ob => ob !== msgObj.msgText);
    //   msgObj.allMessages = msgTextArray
    //   msgObj.lastMsgText = data.msg.msgText
    //   let myMsg = msgObj

    //   //   // await mMsg.save()
    //   await msgModel.findOneAndUpdate({ _id: mMsg._id }, {
    //     $set:
    //     {
    //       msg: myMsg
    //     }
    //   })
    // })
    // )

    return res.json({ status: 200, msg: 'Messages fetched sucessfully', data: allMsgs })
  } catch (e) {
    return res.json({ status: 500, msg: 'Error while fetching bulk messages', err: e.message })
  }
});


//get random message
router.get('/randomMsg', async function (req, res) {
  try {
    let allMsgs = await msgModel.find({}).limit(50).lean().exec();
    let msgData = Math.floor(Math.random() * allMsgs.length);
    let randomMsg = allMsgs[msgData];
    return res.json({ status: 200, msg: 'Random message fetched sucessfully', data: randomMsg })
  } catch (e) {
    return res.json({ status: 500, msg: 'Error while fetching random message', err: e.message })
  }
});


//add message
router.get('/userMsg', async function (req, res) {
  try {
    const { msgType } = req.query;
    if (msgType === null || msgType === undefined || msgType === "") {
      return res.json({ status: 400, msg: 'Please provide key', data: null })
    }


    let checkForMessage = await userMsgModel.findOne({ msgType: msgType }).lean().exec();
    if (!checkForMessage) {
      return res.json({ status: 400, msg: 'No message found for this type', data: null });
    }
    else {
      const addedMessage = await userMsgModel.findOne({ _id: checkForMessage._id }).lean().exec();
      return res.json({ status: 200, msg: 'user messaged fetched sucessfully', data: addedMessage });
    }
  } catch (e) {
    return res.json({ status: 500, msg: 'error while adding message', err: e.message });
  }

});

module.exports = router;
