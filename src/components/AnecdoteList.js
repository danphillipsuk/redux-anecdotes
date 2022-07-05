import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {

  let readOnlyAnecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const anecdotes = [...readOnlyAnecdotes]
  anecdotes.sort((a, b) => b.votes - a.votes)
  
  const vote = (id) => {
    dispatch(addVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList