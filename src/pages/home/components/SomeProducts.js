import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../../../utils/CardProduct'
import { getRandom } from '../../../utils/utils'

const SomeProducts = () => {

  const products = useSelector((state) => state.products.products)

  const productsArray = Object.keys(products).map(key => products[key])

  var productsArrayMerged = [].concat.apply([], productsArray);

  return (
    <div className="some--products--wrapper">
      <h1 className="some-products--title">Some Products</h1>
      <div className="products--wrapper">
        {
          getRandom(productsArrayMerged, 8).map((product, i) => {
            return <CardProduct {...product} key={i} />
          })
        }
      </div>
    </div>
  )
}

export default SomeProducts