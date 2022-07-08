// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if(!content) {
      return
    }
    const contentToDisplay = `You added ${content} to anecdotes`
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(contentToDisplay, 5)
  }

  return (
    <div>
      <h3>Create New</h3>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote'/>
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  {
    createAnecdote,
    setNotification
  }
)(AnecdoteForm) 