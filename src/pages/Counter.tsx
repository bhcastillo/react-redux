import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { decrement, increment, incrementByAmount } from '../store/slices/counter'

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>counter: {counter} </h1>
      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        decrement
      </button>
      <button type="button" onClick={() => dispatch(incrementByAmount(3))}>
        increment by 3
      </button>
    </div>
  )
}
