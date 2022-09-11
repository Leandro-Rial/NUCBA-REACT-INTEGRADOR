import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SELECTED_CATEGORY } from '../redux/slices/categories/categoriesSlices';

const CardCategory = ({ img, title, category }) => {

    const dispatch = useDispatch();
    const { selectedCategory } = useSelector(state => state.categories);

    return (
        <div
            className="card-category--wrapper"
            selected={selectedCategory === category}
            onClick={() => dispatch(SELECTED_CATEGORY(category))}
        >
            <img src={img} alt={title} className="card--img" />
            <h3 className="card--title">{title}</h3>
        </div>
    )
}

export default CardCategory