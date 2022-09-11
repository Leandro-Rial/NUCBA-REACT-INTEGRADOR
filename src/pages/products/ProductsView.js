import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import CardCategory from '../../utils/CardCategory'
import CardProduct from '../../utils/CardProduct'
import Navbar from '../../utils/Navbar'

const DEFAULT_QUANTITY = 8;

const ProductsView = () => {
    const [limit, setLimit] = useState(DEFAULT_QUANTITY);

    const { categories, selectedCategory } = useSelector(state => state.categories);
    const { products, total } = useSelector(state => state.products);

    return (
        <div className="products--wrapper">
            <Navbar />
            <h1>Products</h1>
            <div className="categories--wrapper">
                {
                    categories.map((category, i) => (
                        <CardCategory {...category} key={i} />
                    ))
                }
            </div>
            <div className="products--container">
                {
                    Object.entries(products).map(([_category, products]) =>
                        !selectedCategory || _category === selectedCategory
                            ?   products.map((product, i) =>
                                    product.id <= limit || selectedCategory
                                    ? <CardProduct {...product} key={i} />
                                    : null
                                )
                            :   []
                    )
                }
                {!selectedCategory && (
                    <div className="buttons--wrapper">
                        <button
                            onClick={() => setLimit(previous => previous - DEFAULT_QUANTITY)}
                            secondary='true'
                            disabled={limit <= DEFAULT_QUANTITY}
                        >
                            <span>Ver menos</span>
                        </button>
                        <button
                            onClick={() => setLimit(previous => previous + DEFAULT_QUANTITY)}
                            disabled={limit >= total}
                        >
                            Ver más
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductsView
