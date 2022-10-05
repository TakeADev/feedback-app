import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  let ratingAverage =
    Math.round(
      feedback.reduce((acc, { rating }) => {
        return acc + rating
      }, 0)
    ) / feedback.length

  ratingAverage = ratingAverage.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratingAverage) ? 0 : ratingAverage}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
