const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideController');

router.get('/', guideController.getIndex);
router.get('/lan', guideController.getLanPage);
router.get('/dns', guideController.getDnsPage);
router.get('/dhcp', guideController.getDhcpPage);
router.get('/iot', guideController.getIotPage);
router.get('/glossary', guideController.getGlossaryPage);
router.get('/program-gjennomgang', guideController.getProgramGjennomgangPage);
router.get('/about', guideController.getAboutPage);

module.exports = router;