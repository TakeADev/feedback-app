import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>
  }

  return (
    <div className='feedback-list'>
      <ul>
        {feedback.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList
