import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  let readOnlyAnecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const anecdotes = [...readOnlyAnecdotes]
  anecdotes.sort((a, b) => b.votes - a.votes)
  
  const vote = (id, anecdote) => {
    dispatch(addVote(id))
    dispatch(setNotification(`You voted for '${anecdote}'`, 5))
  }

  return (
    <div>
        {anecdotes
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList