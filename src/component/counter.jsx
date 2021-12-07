import React from 'react'

const Counter = (props) => {
  const { value } = props

  const formatvalue = () => {
    return value === 0 ? 'empty' : value
  }
  const getColorClass = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getColorClass()}>{formatvalue()}</span>
      <button
        className="btn btn-primary btn-sm m-2 "
        onClick={() => props.onhandleIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onhandleDecriment(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  )
}
export default Counter
