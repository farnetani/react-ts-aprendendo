import React, { useContext } from 'react'
import CounterCtx from '../../data/CounterCtx'
import { ICounter } from '../../Types'
import * as S from './styles'

export default function Counter() {
  const { total, setTotal } = useContext<ICounter>(CounterCtx)

  return (
    <S.Container>
      <h1>{total}</h1>
      <button type="button" onClick={() => setTotal(total + 1)}>
        Somar pelo componente Counter
      </button>
    </S.Container>
  )
}
