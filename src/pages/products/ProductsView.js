import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import useWindowResize from '../../hooks/useWindowResize'

import CardCategory from '../../utils/CardCategory'
import CardProduct from '../../utils/CardProduct'
import Navbar from '../../utils/Navbar'

const DEFAULT_QUANTITY = 8;

const ProductsView = () => {
    const [limit, setLimit] = useState(DEFAULT_QUANTITY);

    const { categories, selectedCategory } = useSelector(state => state.categories);
    const { products, total } = useSelector(state => state.products);
    
    const { windowWidth } = useWindowResize()
    
    const showCards = (windowWidth > 850) ? 3 : (windowWidth < 850 && windowWidth > 600) ? 2 : 1

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showCards,
        slidesToScroll: showCards
    };

    return (
        <div className="products--wrapper">
            <Navbar />
            <h1 className="products--title">Products</h1>
            <div className="categories--wrapper">
                <Slider {...settings}>
                    {
                        categories.map((category, i) => (
                            <CardCategory {...category} key={i} />
                        ))
                    }
                </Slider>
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
            </div>
            {!selectedCategory && (
                <div className="buttons--wrapper">
                    <button
                        onClick={() => setLimit(previous => previous - DEFAULT_QUANTITY)}
                        secondary='true'
                        disabled={limit <= DEFAULT_QUANTITY}
                        className={ limit <= DEFAULT_QUANTITY ? "prev-next prev-next-disabled" : "prev-next" }
                    >
                        Ver menos
                    </button>
                    <button
                        onClick={() => setLimit(previous => previous + DEFAULT_QUANTITY)}
                        disabled={limit >= total}
                        className={ limit >= total ? "prev-next prev-next-disabled" : "prev-next" }
                    >
                        Ver más
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductsView
