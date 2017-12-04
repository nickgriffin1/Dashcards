import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Spacer = styled.View`
  height: 30px;
  width: 100%;
  background-color: black;
`

export default function TopSpacer() {
  return (
    <Spacer></Spacer>
  )
}
