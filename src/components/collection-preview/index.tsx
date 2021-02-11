import React from 'react'
import { CollectionItem } from '../collection-item'
import './collection-preview.styles.scss'

interface ICollectionPreviewProps {
  title: string
  items: Array<{
    id: number
    name: string
    price: number
    imageUrl: string
  }>
}

const CollectionPreview: React.FunctionComponent<ICollectionPreviewProps> = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} id={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview