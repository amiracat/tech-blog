const router = require('express').Router();
const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
route.use('/', homeRoutes);
route.use('/dashboard', dashboardRoutes);

module.exports = router;
