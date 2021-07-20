const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
//const { route } = require('./api');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes');

route.use('/', homeRoutes);
router.use('/api', apiRoutes);
route.use('/dashboard', dashboardRoutes);

module.exports = router;
