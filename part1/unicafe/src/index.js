import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onclick, text}) => {
  return (
  <button onClick={onclick}>
    {text}
  </button>
  )
}

const Statistic = ({label, value}) => {
  return (
    <tr>
      <td> {label}: </td>
      <td> {value }</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.allValue === 0) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
      <Statistic 
        label={props.goodLabel}
        value={props.goodValue}
       />
      <Statistic 
        label={props.neutralLabel}
        value={props.neutralValue}
       />
      <Statistic 
        label={props.badLabel}
        value={props.badValue}
      />
     <Statistic 
        label={props.allLabel}
        value={props.allValue}
      />
      <Statistic 
        label={props.avgLabel}
        value={props.avgValue}
      />
      <Statistic 
        label={props.posLabel}
        value={props.posValue}
      />
       </tbody>
      </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1) 
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1) 
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1) 
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button 
        onclick = {handleGoodClick}
        text='good'
      /> 
      <Button 
        onclick = {handleNeutralClick}
        text='neutral'
      /> 
      <Button 
        onclick = {handleBadClick}
        text='bad'
      />
      <br></br>
      <h1>Statistics</h1>
      <Statistics
        goodLabel='Good'
        goodValue={good}
        neutralLabel='Neutral'
        neutralValue={neutral}
        badLabel='Bad'
        badValue={bad}
        allLabel='All'
        allValue={all}
        avgLabel='Average'
        avgValue={(good - bad) / all}
        posLabel='Positive'
        posValue={((good / all) * 100) + ' %'}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
