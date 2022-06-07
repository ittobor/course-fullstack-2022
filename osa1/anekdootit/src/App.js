import { useState } from 'react'

const VoteButton = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const AnecdoteButton = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Votes = ({votes}) => (
  <div>has {votes} votes</div>
)

const MostAnecdotes = ({anecdote, votes}) => (
  <>
    <div>{anecdote}</div>
    <Votes votes={votes} />
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can writee code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votesArray, setVote] = useState(Array(anecdotes.length).fill(0))
  
  const voting = anecdote => {
    const copy = [...votesArray]
    copy[anecdote] += 1
    return copy
  }

  const topAnecdote = () => {
    const copy = [...votesArray]
    copy.sort()
    copy.reverse()
    return votesArray.indexOf(copy[0])
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Votes votes={votesArray[selected]} />
      <VoteButton handleClick={() => setVote(voting(selected))} text='Vote' />
      <AnecdoteButton handleClick={() => setSelected((Math.floor(Math.random() * anecdotes.length)))} text='Next anecdote!' />
      <MostAnecdotes anecdote={anecdotes[topAnecdote()]} votes={votesArray[topAnecdote()]} />
    </div>
  )
}

export default App
