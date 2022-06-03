import { useState } from 'react'

const goodText = 'Good'
const neutralText = 'Neutral'
const badText = 'Bad'
const allText = 'All'

const header1Text = 'Give feedback'
const header2Text = 'Statistics'

const labelPositive = 'Positive'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Count = ({text, value}) => (
  <div>{text}: {value}</div>
)

const Average = ({good, neutral, bad}) => (
  <div>Average: { (good - bad) / (good + neutral + bad) }</div>
)

const Percentage = ({label, dividend, divisor}) => (
  <div>{label} {(dividend / divisor) * 100} %</div>
)

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
    <Header text={header2Text} />
    <Count text={goodText} value={good} />
    <Count text={neutralText} value={neutral} />
    <Count text={badText} value={bad} />
    <Count text={allText} value={good+neutral+bad} />
    <Average good={good} neutral={neutral} bad={bad} />
    <Percentage label={labelPositive} dividend={good} divisor={(good+neutral+bad)} />
    </>
  )
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
