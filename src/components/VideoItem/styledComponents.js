import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 300px;
  margin: 10px;
`
export const VideoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
`

export const ThumbnailImg = styled.img`
  width: 300px;
  height: 172px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
`

export const ChannelProfile = styled.img`
  width: 42px;
  height: 42px;
  margin: 8px;
`

export const VideoTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px;
`

export const VideoTitle = styled.h1`
  font-size: 16px;
  color: #1e293b;
  font-weight: 400;
  font-family: 'Roboto';
  margin: 2px;
`

export const VideoCount = styled.p`
  font-size: 12px;
  color: #475569;
  font-family: 'Roboto';
  margin: 2px;
`
