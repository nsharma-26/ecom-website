import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../component/preview-collection/preview-collection'

export class shop extends Component {
    constructor(props){
        super();
        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default shop
