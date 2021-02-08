import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

interface IMenuItemProps extends RouteComponentProps {
  title: string
  imageUrl: string
  size?: string
  linkUrl?: string
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ size, title, imageUrl, history, match, linkUrl }) => (
  <div
    className={ `${size} menu-item` }
    onClick={ () => history.push(`${match.url}${linkUrl}`) }
  >
    <div
      style={ {
        backgroundImage: `url(${imageUrl})`
      } }
      className="background-image"></div>
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)