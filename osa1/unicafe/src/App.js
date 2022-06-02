import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Result = ({text, value}) => (
  <div>
    {text} {value}
  </div>
)

const App = () => {
  // tallentaan napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodText = 'Good'
  const neutralText = 'Neutral'
  const badText = 'Bad'

  const header1Text = 'Give feedback'
  const header2Text = 'Statistics'

  return (
    <div >
      <Header text={header1Text} />
      <Button handleClick={() => setGood(good + 1)} text={goodText} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={neutralText} />
      <Button handleClick={() => setBad(bad + 1)} text={badText} />
      <Header text={header2Text} />
      <Result text={goodText} value={good} />
      <Result text={neutralText} value={neutral} />
      <Result text={badText} value={bad} />
    </div>
  )
}

export default App
