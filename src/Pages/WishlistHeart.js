// import React, { useState } from 'react';
// import { FaHeart } from 'react-icons/fa';

// const WishlistHeart = () => {
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   return (
//     <div onClick={toggleWishlist} className="cursor-pointer">
//       <FaHeart
//         size={30}
//         color={isWishlisted ? 'red' : 'white'}
//         style={{ stroke: 'black', strokeWidth: isWishlisted ? 0 : 2 }}
//       />
//     </div>
//   );
// };

// export default WishlistHeart;

import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const WishlistHeart = ({ productId, className }) => {
  const { wishlist, toggleWishlist } = useContext(ShopContext);
  const isWishlisted = wishlist.includes(productId);

  return (
    <div onClick={() => toggleWishlist(productId)} className={`cursor-pointer ${className}`}>
      <FaHeart
        size={30}
        color={isWishlisted ? 'red' : 'white'}
        style={{ stroke: 'black', strokeWidth: isWishlisted ? 0 : 2 }}
      />
    </div>
  );
};

export default WishlistHeart;
