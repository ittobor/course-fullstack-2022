import { useState } from 'react'

const goodText = 'Good'
const neutralText = 'Neutral'
const badText = 'Bad'
const allText = 'All'
const averageText = 'Average'
const positiveText = 'Positive'

const header1Text = 'Give feedback'
const header2Text = 'Statistics'
const fbDisclaimer = 'No feedback given'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
  <tr><td>{text}:</td><td>{value}</td></tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral || bad > 0) {
    return (
      <table border='0'>
        <tbody>
          <StatisticLine text={goodText} value={good} />
          <StatisticLine text={neutralText} value={neutral} />
          <StatisticLine text={badText} value={bad} />
          <StatisticLine text={allText} value={good+neutral+bad} />
          <StatisticLine text={averageText} value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text={positiveText} value={((good / (good+neutral+bad)) * 100).toString() + '%'} />
        </tbody>
      </table>
    )
  } else {
    return (
    <>
    {fbDisclaimer}
    </>
    )
  }
}

const App = () => {
  // tallentaan napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div >
      <Header text={header1Text} />
      <Button handleClick={() => setGood(good + 1)} text={goodText} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={neutralText} />
      <Button handleClick={() => setBad(bad + 1)} text={badText} />
      <Header text={header2Text} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
