import { useState } from 'react'

const Header = () => (
    <h1>
      give feedback
    </h1>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if((good+neutral+bad) === 0) { 
    return (
      <>
      <h1>
      statistics
      </h1>
      <p>
        No feedback given
      </p>
      </>
    )
  }

  return (
    <>
      <h1>
      statistics
      </h1>
      <Statistic text={'good'} value={good}></Statistic>
      <Statistic text={'neutral'} value={neutral}></Statistic>
      <Statistic text={'bad'} value={bad}></Statistic>
      <Statistic text={'average'} value={(good + (bad * -1))/3}></Statistic>
      <Statistic text={'positive'} value={(100*good)/(good+bad+neutral)}></Statistic>
    </>
  )
} 

const Statistic = ({text, value}) => {
  if(text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header></Header>
      <Button handleClick={() => setGood(good + 1)} text='good'></Button>
      <Button handleClick={() => setNeutral(neutral +1)} text='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1)} text='bad'></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}
 
export default App