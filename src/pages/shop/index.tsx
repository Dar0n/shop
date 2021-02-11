import React from 'react'
import CollectionPreview from '../../components/collection-preview'
import { SHOP_DATA } from './shopping_data'

interface IShopPageProps{}

interface IShopPageState {
  collections: typeof SHOP_DATA
}

class ShopPage extends React.Component<IShopPageProps, IShopPageState> {
  constructor(props: IShopPageProps) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const {collections} = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage