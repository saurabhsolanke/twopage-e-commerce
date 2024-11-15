import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRating from '../components/StarRating';


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p className="flex w-full space-x-5 pagination">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline h-16 w-16 animate-spin fill-gray-600 text-gray-300 dark:fill-gray-400 dark:text-gray-600">
      <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
      <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentFill" />
    </svg>
  </p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
      <div className="col-span-1 lg:col-span-1 flex justify-center items-center bg-gray-100 p-5 rounded-lg border">
        <img className="object-contain h-64 w-full rounded-lg" src={product.images[0]} alt={product.title} />
      </div>
      <div className="col-span-1 lg:col-span-2 p-5 bg-white rounded-lg shadow-md">
        <div className="product-details space-y-4">
          <h2 className="font-bold text-3xl text-gray-800">{product.title}</h2>
          <p className="text-gray-600 text-base">{product.description}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>

          <div className="flex items-center">
            <p className="text-sm text-gray-800">{product.rating}</p>
            <StarRating rating={Math.round(product.rating)} />
          </div>
          <p className="text-2xl font-semibold text-gray-800">Price: ${product.price}</p>
          {product.discountPercentage && (
            <p className="text-green-500 font-semibold">
              Discount: {product.discountPercentage}%
            </p>
          )}
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
