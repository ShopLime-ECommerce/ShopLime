const router = require('express').Router()
const { Review, User } = require('../db/models')

router.get('/:id', (req, res, next) => {
	Review.findAll({ where: { itemId: req.params.id }, include: [User] })
		.then((reviews) => res.json(reviews))
		.catch(next)
})

router.post('/', (req, res, next) => {
	Review.create(req.body)
		.then((review) => res.json(review))
		.catch(next)
})

module.exports = router
