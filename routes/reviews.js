const express = require('express');
// we can use mergeParams or we can change the
// routes so the id will be in the routes
const router = express.Router({ mergeParams: true });

const reviews = require('../controllers/reviews')

const Campground = require('../models/campground');
const Review = require('../models/review')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')

const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');


router.post('/:id/reviews', validateReview, isLoggedIn, catchAsync(reviews.createReview))

router.delete('/:id/reviews/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;