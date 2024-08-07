import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkTheme ? ' #0f0f0f  ' : ' #f9f9f9')};
`

export const VideoDetailsDiv = styled.div`
  display: flex;

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
  width: 100%;
  padding: 20px;
  background-color: inherit;
  flex-direction: column;
  align-items: center;

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
  margin-top: 20px;
`
export const VideoInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px 0px 20px;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
  color: #475569;
`
export const ActionButton = styled.button`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  border: 0px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`
export const ChannelDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
`

export const ChannelProfileImg = styled.img`
  width: 42px;
  height: 42px;
  align-self: flex-start;
  margin: 8px 8px 0px 0px;
`
export const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChannelName = styled.h1`
  color: #475569;
  font-size: 12px;
  font-weight: 400;
`

export const ChannelSubscribers = styled.p`
  color: #64748b;
  font-size: 11px;
  margin-top: 4px;
`

export const ChannelDescription = styled.p`
  color: #64748b;
  font-size: 14px;
`
