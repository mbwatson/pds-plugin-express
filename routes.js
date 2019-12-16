const express = require('express')
const router = express.Router()

const testController = require('./controllers/test')
const configController = require('./controllers/config')
const guidanceController = require('./controllers/guidance')

router.route('/').get(testController.test)
router.route('/config').get(configController.getConfig)
router.route('/guidance').get(guidanceController.getGuidance)

module.exports = router
