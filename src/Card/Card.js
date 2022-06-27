import React from 'react'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

function Card({ val, onClick }) {
    const { rating, image, name, gram, price } = val;
    return (
        <>
            <div className='card-box' onClick={onClick}>
                <div className='card-section1'>
                    <p className='rating'><span className='star'><StarRateIcon sx={{ fontSize: 10 }} /></span>{rating}</p>
                    <span className='like'><FavoriteBorderIcon sx={{ fontSize: 20 }} /></span>
                </div>
                <div className='card-section2'><img src={image} alt='image' /></div>
                <div className='card-section3'>
                    <p className='name'>{name} <span className='gram'>{gram}</span></p>
                    <p className='price'><b>{price}</b></p>
                </div>
            </div>
        </>
    )
}

export default Card