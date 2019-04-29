import React from 'react'
import Review from './Review.js'

const MovieReviews = props => {

  const allReviews = () => {
    const {reviews} = props
    return (reviews.map(review => <Review review={review} key={review.display_title}/> ))
  }
  return (<div className="review-list">{allReviews()}</div>)
}

MovieReviews.defaultProps ={
  reviews: []
}

export default MovieReviews
