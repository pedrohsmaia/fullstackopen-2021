import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ state }) => {
  return (
    <div>
      <button onClick={state}>
        generate
      </button>
    </div>
  )
}

const VoteButton = ({ vote }) => {
  return (
    <div>
      <button onClick={vote}>
        vote
      </button>
    </div>
  )
}

const MostVoted = ({ anecdotes, allVotes }) => {
  const mostVoteCount = Math.max(...allVotes)
  const mostVoteIndex = allVotes.indexOf(mostVoteCount)

  if (mostVoteCount === 0) {
    return (
      <p>No votes</p>
    )
  }

  return (
    <>
      <p>{anecdotes[mostVoteIndex]}</p>
      <p>has {mostVoteCount} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(7).fill(0))

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function change() {
    setSelected(getRandomIntInclusive(0, (anecdotes.length - 1)))
  }

  const vote = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}></Header>
      {anecdotes[selected]}
      <p>
        Has {allVotes[selected]} votes.
      </p>
      <VoteButton vote={vote}></VoteButton>
      <Button state={change}></Button>
      <Header text={'Anecdote with most votes'}></Header>
      <MostVoted anecdotes={anecdotes} allVotes={allVotes}></MostVoted>
    </div>
  )
}

export default App