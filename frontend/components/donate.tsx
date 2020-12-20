import React from 'react'
import styled from 'styled-components'

const Donate = styled.div`
  padding: 25px 50px;
`

export default function DonateBox(): JSX.Element {
  return (
    <Donate>
      Love <strong>Shields</strong>? Please consider{' '}
      <strong>
        <a href="https://opencollective.com/shields">donating</a>
      </strong>{' '}
      to sustain our activities
    </Donate>
  )
}
