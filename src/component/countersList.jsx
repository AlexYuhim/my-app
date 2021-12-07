import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initionState = [
    { id: 0, value: 5, name: 'Не нужная вещь', prise: '100' },
    { id: 1, value: 3, name: 'Ложка' },
    { id: 2, value: 2, name: 'Вилка' },
    { id: 3, value: 3, name: 'Тарелка ' },
    { id: 4, value: 2, name: 'Какая-то вещь' },
  ]
  const [counters, setCounter] = useState(initionState)

  const handelDelete = (id) => {
    const newCounter = counters.filter((c) => c.id !== id)
    setCounter(newCounter)
  }
  const hendelReset = () => {
    setCounter(initionState)
    console.log('hendelReset')
  }
  const handleIncrement = (id) => {
    const increment = counters.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          value: event.value + 1,
        }
      }
      return event
    })
    setCounter(increment)
  }
  const handleDecriment = (id) => {
    const decrement = counters.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          value: event.value - 1,
        }
      }
      return event
    })
    setCounter(decrement)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handelDelete}
          onhandleIncrement={handleIncrement}
          onhandleDecriment={handleDecriment}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={hendelReset}>
        Сброс
      </button>
      {/* <button className="btn btn-primary btn-sm m-2" onClick={handelUpdate}>
        Обновить состояние */}
      {/* </button> */}
    </>
  )
}
export default CountersList
