import styled from 'styled-components'

export const PopUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-family: 'Roboto';
  padding: 16px;
  min-height: 200px;
`

export const PopUpButton = styled.button`
  background-color: ${props => (props.cancel ? '#ffffff' : '#3B71CA')};
  border: ${props =>
    props.cancel ? '2px solid #9fa6b2' : '2px solid #3B71CA'};
  color: ${props => (props.cancel ? '#9fa6b2' : '#ffffff')};
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin: 8px;
`
