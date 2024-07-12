// import React, { useContext } from 'react';
// import './ProductDetails.css'
// import { useParams } from 'react-router-dom';
// import star_icon from '../Components/Assets/star_icon.png';
// import star_dull_icon from '../Components/Assets/star_dull_icon.png';
// import all_product from "../Components/Assets/all_product";
// import { ShopContext } from '../Context/ShopContext';
// import WishlistHeart from '../Pages/WishlistHeart';

// export default function ProductDetail() {

//     const {addToCart} = useContext(ShopContext);


    

//     const { id } = useParams();
//     console.log(id);

//     // Find the product detail based on the id parameter
//     const product = all_product.find(product => product.id === parseInt(id));

//     // If product is not found, display a message
//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     // Render product details
//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     <img src={product.image} alt="" />  
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                 </div>
//                 <div className="productdisplay-img">
//                     <img className='productdisplay-main-img' src={product.image} alt="" />
//                     <WishlistHeart className="wishlist-heart" />
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-stars">
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>(122)</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-prices-old">${product.old_price}</div>
//                     <div className="productdisplay-right-prices-new">${product.new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     {product.description}
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         <div>S</div>
//                         <div>M</div>
//                         <div>L</div>
//                         <div>XL</div>
//                         <div>XXL</div>
//                     </div>
//                 </div>
//                 <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
//                 <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
//                 <p className='productdisplay-right-category'><span>Tags :</span>{product.tags}</p>
//             </div>
//         </div>
//     );
// }


import React, { useContext } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import all_product from '../Components/Assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import WishlistHeart from '../Pages/WishlistHeart';

export default function ProductDetail() {
    const { addToCart } = useContext(ShopContext);
    const { id } = useParams();
    const product = all_product.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img relative">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                    <WishlistHeart productId={product.id} className="wishlist-heart" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
                <p className='productdisplay-right-category'><span>Tags :</span>{product.tags}</p>
            </div>
        </div>
    );
}
