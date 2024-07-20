import {Link} from 'react-router-dom'
import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const TrendingVideoDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-decoration: none;
  @media screen and ${device.lg} {
    flex-direction: row;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;

  @media screen and ${device.lg} {
    width: 400px;
  }
`
export const TrendingDetails = styled.div`
  margin-left: 20px;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: 500;
`

export const VideoSubText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
`
