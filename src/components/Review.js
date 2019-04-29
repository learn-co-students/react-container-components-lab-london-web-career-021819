import React from 'react'

const Review = props => {
  return (
  <div className="review" >
    <div><strong>Movie Name:</strong> {props.review.display_title}</div>
    <p>Summary: {props.review.summary_short}</p>
  </div>
  )
}

export default Review
