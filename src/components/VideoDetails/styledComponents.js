import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
`
export const VideoDetailsMain = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
`
export const VideoDetailsDiv = styled.div`
  display: flex;
  width: 100vw;
  @media screen and ${device.lg} {
    flex-direction: row;
  }
`
export const LargeSideBarDiv = styled.div`
  max-width: 30vw;
  @media screen and ${device.sm} {
    display: none;
  }
`
export const DetailsCont = styled.div`
  display: flex;
  width: 75vw;
  padding: 20px;

  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  @media screen and ${device.sm} {
    width: 100vw;
  }
`
export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  color: #1e293b;
  align-self: flex-start;
  margin: 0px;
`
export const VideoInfo = styled.p`
  display: flex;
  width: inherit;
  padding: 0px 20px 0px 20px;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
  color: #475569;
`
export const ActionButton = styled.button`
  color: #475569;
  border: 0px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`
