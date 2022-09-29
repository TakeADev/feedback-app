import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>
  }

  return (
    <div className='feedback-list'>
      <ul>
        {feedback.map((item) => {
          return <FeedbackItem key={item.id} item={item} />
        })}
      </ul>
    </div>
  )
}

export default FeedbackList
