import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  //Verifies input isn't empty and is at least 10 char. before allowing and submitting.
  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (value !== '' && value.trim().length < 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(value)
  }

  //Confirms text is at least 10 char. before adding to data. Displays alert if not
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating)
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      handleAdd(newFeedback)
    } else
      alert('The text submitted was not at least 10 characters. Try again.')
    setText('')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
