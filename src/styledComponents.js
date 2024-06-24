import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
`
