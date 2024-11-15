import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const limit = 10;
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`, {
          params: { limit, skip: (currentPage - 1) * limit },
        });
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <div className='div'>
      <div className="justify-start text-gray-700 dark:text-gray-500 text-3xl">
        <h1 className='m-8'>Products</h1>
      </div>
      <div className="mx-5 grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalProducts}
        itemsPerPage={limit}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductsList;