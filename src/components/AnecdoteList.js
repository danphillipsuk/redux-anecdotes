import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const readOnlyAnecdotes = useSelector(state => state.anecdotes)
  const filterString = useSelector(state => state.filter)

  const vote = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
  }

  const anecdotes = [...readOnlyAnecdotes]
  anecdotes.sort((a, b) => b.votes - a.votes)
  
  const anecdotesToRender = filterString.length === 0 ?
    anecdotes :
    anecdotes.filter(a => a.content.toLowerCase().includes(filterString.toLowerCase()))

  return (
    <div>
        {anecdotesToRender.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList