import { createContext } from 'react'
import { ICounter } from '../Types'

const CounterCtx = createContext<ICounter>({} as ICounter)

export default CounterCtx
