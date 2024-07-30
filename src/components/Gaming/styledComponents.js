import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const GamingList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`
export const GamingCont = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;

  background-color: ${props => (props.darkTheme ? '#0f0f0f ' : ' #f9f9f9')};
  @media screen and ${device.sm} {
    width: 100vw;
  }
`
