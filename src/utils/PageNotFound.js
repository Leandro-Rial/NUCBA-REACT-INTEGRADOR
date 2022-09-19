import React from 'react'

import { useNavigate } from 'react-router-dom';

import notFound from '../assets/img/pngegg.png'

const PageNotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='page-not-found--wrapper'>
      <h1 className="page-not-found--title">Page Not Found</h1>
      <img src={notFound} alt="" className='page-not-found--img' />
      <div className="btn--wrapper__shadow">
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/home')}
        >
          Go back home
        </button>
      </div>
    </div>
  )
}

export default PageNotFound