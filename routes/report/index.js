const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../../middlewares/middlewares');
const reportController = require('../../controller/reportController');

router.post('/:cafeId/deleteCafe', jwtMiddleware.userJwt, reportController.deleteCafe);
router.post('/:cafeId/editCafe', jwtMiddleware.userJwt, reportController.editCafe);
router.get('/', jwtMiddleware.userJwt, reportController.readReports);
router.post('/:cafeId', jwtMiddleware.userJwt, reportController.readReports);

module.exports = router;