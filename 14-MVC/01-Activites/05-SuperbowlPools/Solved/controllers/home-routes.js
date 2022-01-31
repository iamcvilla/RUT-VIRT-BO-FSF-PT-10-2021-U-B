const router = require('express').Router();
const { Box, Pool } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all pools for homepage

router.get('/create', async (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  console.log('request.body is', req.body);
  const poolTitle = req.body.title;
  const pool = await Pool.create({
    title: poolTitle,
  });
  console.log('pool', pool);
  var boxes = [];
  for (let row = 0; row < 10; row++) {
    for ( let column = 0; column < 10; column ++) {
      boxes.push({
        row: row,
        col: column,
        pool_id: pool.dataValues.id,
      });
    }
  }
  await Box.bulkCreate(boxes);

  console.log('boxes are', boxes);
  res.render('create');
});

router.get('/', async (req, res) => {
  try {
    const pools = await Pool.findAll({
    });
    console.log('pools', pools);

    res.render('homepage', {
      pools,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/save-box', async (req, res) => {
  console.log('req.body', req.body);
  await Box.update({
    user: req.session.username,
  }, {
    where: {
      id: req.body.boxId,
    }
  })
  res.send();
});

// GET one pool
// Use the custom middleware before allowing the user to access the gallery
router.get('/pool/:id', async (req, res) => {
  try {
    const pool = await Pool.findByPk(req.params.id, {
      include: [
        {
          model: Box,
          attributes: [
            'id',
            'row',
            'col',
            'user',
          ],
        },
      ],
    });
    console.log('pool data is', pool);
    console.log('session is', req.session);
    res.render('pool', { pool, username: req.session.username });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
