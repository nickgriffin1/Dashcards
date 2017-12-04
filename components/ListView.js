import React from 'react'
import styled from 'styled-components/native'

const ListViewContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: red;
`

const Header = styled.Text`
  font-size: 36px;
  color: #333;
`

const ListView = function() {
  return (
    <ListViewContainer>
    	<Text>List view</Text>
    </ListViewContainer>
  )
}

export default ListView
