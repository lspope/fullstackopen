import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onclick, text}) => {
  return (
  <button onClick={onclick}>
    {text}
  </button>
  )
}

const AnecdoteOfDay = (props) => {
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {props.daily}
      <br></br>
      has {props.voteCount} votes
      <br></br>
      <Button
        onclick= {props.handleVoteClick}
        text='vote'
      />
      <Button
        onclick= {props.handleNextClick}
        text='next anecdote'
      />
    </div>
  )
}

const PopularAnecdote = (props) => { 
  if (props.voteCount === 0) {
    return (
      <div>
        No votes yet.
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      {props.popular}
      <br></br>
      has {props.voteCount} votes
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [popIndex, setPopIndex] = useState(0)
  const copy = [...votes]

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * 6)) 
  }

  const handleVoteClick = () => {
    copy[selected] += 1
    setVotes(copy)
    setPopIndex(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div> 
      <AnecdoteOfDay 
        daily = {props.anecdotes[selected]}
        voteCount = {votes[selected]}
        handleNextClick = {handleNextClick}
        handleVoteClick = {handleVoteClick}
      />
      <br></br>
      <PopularAnecdote
        popular = {props.anecdotes[popIndex]}
        voteCount = {Math.max(...votes)}
      />
    </div> 
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)