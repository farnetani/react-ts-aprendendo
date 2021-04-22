import React, { useState } from 'react'
import Counter from './components/counter'
import { GlobalStyle } from './styles/global'
import * as S from './styles'
import CounterCtx from './data/CounterCtx'

export function App() {
  const [total, setTotal] = useState(0)

  return (
    <CounterCtx.Provider value={{ total, setTotal }}>
      <S.Container>
        <GlobalStyle />
        <h1 className="title">Hello World</h1>
        <Counter />
        <S.Container>
          <button type="button" onClick={() => setTotal(total + 1)}>
            Somar pelo App
          </button>
        </S.Container>
      </S.Container>
    </CounterCtx.Provider>
  )
}
