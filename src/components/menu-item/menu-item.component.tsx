import React from 'react'

import './menu-item.styles.scss'

interface IMenuItemProps {
  title: string
  imageUrl: string
  size?: string
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ size, title, imageUrl }) => (
  <div
    className={ `${size} menu-item` }>
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

export default MenuItem