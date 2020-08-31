const router = require('express').Router()

router.use('/order', require('./order'))
router.use('/items', require('./items'))
router.use('/auth', require('./auth'))

router.use((req, res, next) => {
	const error = new Error('Not Found')
	error.status = 404
	next(error)
})

module.exports = router