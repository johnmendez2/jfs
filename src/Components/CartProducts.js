import React from 'react'
import { IndividualCartProduct } from './IndividualCartProducts'

export const CartProducts = ({cartProducts}) => {
    return cartProducts.map((cartProduct)=>(
        <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct}/>
    ))
}