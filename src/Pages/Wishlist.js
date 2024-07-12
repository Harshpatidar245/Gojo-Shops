import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Components/Assets/cart_cross_icon.png';
import { FaWhatsapp, FaCopy } from 'react-icons/fa'; // Import icons for WhatsApp and copy
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';


const Wishlist = () => {
  const { wishlist, all_product, toggleWishlist, addToCart } = useContext(ShopContext);

    const handleShareWhatsApp = (product) => {
        const url = encodeURIComponent(window.location.href); // Get current URL
        const text = encodeURIComponent(`Check out ${product.name} at ${url}`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    };

    const handleCopyLink = (product) => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => alert('Link copied to clipboard'))
            .catch((err) => console.error('Failed to copy:', err));
    };

   
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Share</p>
                {/* <p>Copy link</p> */}
                <p>Add To Cart</p>
                <p>Remove</p>

            </div>
            <hr />
            {all_product.map((product) => {
                if (wishlist.includes(product.id)) {
                    return (
                        <div key={product.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={product.image} alt='' className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>₹{product.new_price}</p>
                                <button onClick={() => handleShareWhatsApp(product)} className="p-2  w-1/3  text-green rounded-full" > <FaWhatsapp className='text-3xl' /></button>

                                <button onClick={() => addToCart(product.id)} className="p-2  text-blue-500 border border-sky-500 rounded">ADD TO CART</button>                                {/* <button onClick={() => handleCopyLink(product)} className="p-3 w-1/3 h-12 text-black rounded-full" ><FaCopy className='text-2xl' /></button> */}
                                <div className='cartitems-actions'>
                                    <img
                                        className='cartitems-remove-icon'
                                        src={remove_icon}
                                        onClick={() => toggleWishlist(product.id)}
                                        alt=''
                                    />
                                    {/* <div className='share-icons'>
                                        <button onClick={() => handleShareWhatsApp(product)}>
                                            <FaWhatsapp />
                                        </button>
                                        <button onClick={() => handleCopyLink(product)}>
                                            <FaCopy />
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default Wishlist;
