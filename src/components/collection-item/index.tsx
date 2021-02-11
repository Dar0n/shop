import React from 'react'
import './collection-item.styles.scss'

interface ICollectionItemProps {
  id: number,
  name: string
  price: number
  imageUrl: string
}

export const CollectionItem: React.FunctionComponent<ICollectionItemProps> = ({id, name, price, imageUrl}) => (
  <div className="collection-item">
    <div className="image"
    style={{
      backgroundImage: `url(${imageUrl})`
    }}>
    </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
  </div>
)

