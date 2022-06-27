import React, { useContext, useState } from 'react'
import Card from '../Card/Card';
import Data from '../Card/Data'
import './Menu.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../Context/CartContext';

function Menu() {

    const [showLinks, setShowLinks] = useState(false);

    const { cartItem, removeFromCart, addToCart, increase, decrease, totalAmount } = useContext(CartContext)
    return (
        <>
            <div className='main-section'>
                <div className='first-section'>
                    <div className='section1'>
                        <span><MenuBookIcon sx={{ fontSize: 20, color: 'green' }} /></span>
                        <h3>MENU</h3>
                    </div>
                </div>
                <div className='second-section'>
                    <div className='section1'>
                        <button><FilterListIcon sx={{ fontSize: 13 }} />Filter</button>
                        <p>Sort by: <b>Recommended</b><ArrowDropDownIcon sx={{ fontSize: 15, cursor: 'pointer' }} /></p>
                    </div>
                    <div className='section2'>
                        {Data.map((val) => {
                            return (
                                <Card key={val.id} val={val} onClick={() => addToCart(val)} />
                            )
                        })}
                    </div>
                </div>
                <div className={showLinks ? 'third-section2' : 'third-section'}>
                    <div className='section1'>
                        <div className='section1-order'>
                            <h3>My Order</h3>
                            <p>Edit</p>
                        </div>
                        <p><span className='circle'><CircleIcon sx={{ fontSize: 13 }} /></span>14:30 AM</p>
                    </div>
                    <div className='section2'>
                        <div className='section2-card'>
                            {cartItem.length === 0 && <div className='section2-empty'><h4>Cart Is Empty</h4></div>}
                            {cartItem.map((val) => (
                                <div key={val.id} className='section2-cardbox'>
                                    <img src={val.image} alt='image' />
                                    <div className='section2-namegram'>
                                        <p>{val.name}</p>
                                        <span>{val.gram}</span>
                                    </div>
                                    <div className='section2-quantity'>
                                        <button onClick={() => {
                                            if (val.quantity > 1) {
                                                decrease(val.id)
                                            } else {
                                                removeFromCart(val.id)
                                            }
                                        }}><RemoveIcon sx={{ fontSize: 13 }} /></button>
                                        <p>{val.quantity}</p>
                                        <button onClick={() => increase(val.id)}><AddIcon sx={{ fontSize: 13 }} /></button>
                                    </div>
                                    <p><b>{val.price}</b></p>
                                    <button onClick={() => removeFromCart(val.id)}><span><ClearIcon /></span></button>
                                </div>))}
                        </div>
                        <button className='section2-dragdrop'>Drag&amp;Drop</button>
                    </div>
                    <div className='section3'>
                        <div className='section3-total'>
                            <p>Total</p>
                            <p><b>{totalAmount}$</b></p>
                        </div>
                        <div className='section3-button'>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
                <div className='sectioncart' onClick={() => setShowLinks(!showLinks)}>{showLinks ? <ClearIcon sx={{ cursor: 'pointer' }} /> : <ShoppingCartIcon sx={{ fontSize: 30, cursor: 'pointer' }} />}</div>
            </div>
        </>
    )
}

export default Menu