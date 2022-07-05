import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if(!content) {
      return
    }
    const contentToDisplay = `You added ${content} to anecdotes`
    event.target.anecdote.value = ''
    dispatch(setNotification(contentToDisplay, 5))
    dispatch(createAnecdote(content))
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

export default AnecdoteForm