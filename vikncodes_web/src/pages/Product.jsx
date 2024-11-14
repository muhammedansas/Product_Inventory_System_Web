import React, { useState } from 'react';
import { useAddStock, useGetProduct, useRemoveStock } from '../api/ProductApi';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddStockModal from '../components/modals/AddStockModal';
import RemoveStockModal from '../components/modals/RemoveStockModal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLogOut } from '../api/AuthApi';

const Product = () => {
  const navigate = useNavigate();
  
  const [selectedVariants, setSelectedVariants] = useState({});
  const [variantModalOpen, setVariantModalOpen] = useState(false);
  const [addStockModalOpen, setAddStockModalOpen] = useState(false);
  const [removeStockModalOpen, setRemoveStockModalOpen] = useState(false);
  const [selectedSubvariant, setSelectedSubvariant] = useState(null);

  const { data: products } = useGetProduct();
  const { mutate: addstock } = useAddStock();
  const { mutate: removestock } = useRemoveStock();
  const { mutate:logout } = useLogOut()

  const { authUser } = useAuthContext();
  const onLogout = () =>{
    logout()
  }

  const handleVariantClick = (productId, variantId) => {
    setSelectedVariants((prevSelectedVariants) => ({
      ...prevSelectedVariants,
      [productId]: variantId,
    }));
  };

  const handleAddStock = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addstock(formData);
  };

  const handleRemoveStock = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    removestock(formData);
  };

  const handleVariantModalOpen = (subvariant) => {
    setSelectedSubvariant(subvariant);
    setVariantModalOpen(true);
  };

  const handleVariantModalClose = () => {
    setVariantModalOpen(false);
  };

  const handleAddStockModalOpen = () => {
    setAddStockModalOpen(true);
  };

  const handleAddStockModalClose = () => {
    setAddStockModalOpen(false);
  };

  const handleRemoveStockModalOpen = () => {
    setRemoveStockModalOpen(true);
  };

  const handleRemoveStockModalClose = () => {
    setRemoveStockModalOpen(false);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300">
      <div>
        <ToastContainer />
      </div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-full w-full">
        <div className="absolute top-4 left-4 flex space-x-4">
          <button
            onClick={handleGoHome}
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Home
          </button>
        </div>

        <div className="absolute top-4 right-4">
        {authUser && (
        <button
          onClick={onLogout}
          className="absolute top-6 right-6 px-6 py-3 bg-white text-[#2E3A59] font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#e0e0e0] transition-transform duration-200"
        >
          Logout
        </button>
      )}
        </div>

        <h2 className="text-3xl font-extrabold text-center text-indigo-500 mb-8">Product Page</h2>

        <div className="mb-8 text-center">
          {authUser.is_admin && (
            <button
              onClick={() => navigate('/AddProducts')}
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Add Product
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.products?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 w-64"
            >
              <div className="mb-3">
                {product.ProductImage ? (
                  <img
                    src={product.ProductImage}
                    alt={product.ProductName}
                    className="w-full h-32 object-cover rounded-lg shadow-sm mb-3"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-700 rounded-lg shadow-sm mb-3 flex items-center justify-center">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
              </div>

              <h3 className="text-sm font-semibold text-indigo-500 mb-2">{product.ProductName}</h3>

              <div className="mb-2">
                <h4 className="text-xs font-medium text-gray-300">Variants:</h4>
                <div className="flex flex-wrap space-x-2 mt-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantClick(product.id, variant.id)}
                      className={`py-1 px-2 rounded-lg transition duration-300 text-xs ${
                        selectedVariants[product.id] === variant.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-indigo-500'
                      }`}
                    >
                      {variant.variant_name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <h4 className="text-xs font-medium text-gray-300">Subvariants:</h4>
                <div className="flex space-x-2 mt-2">
                  {product.variants
                    .find((variant) => variant.id === selectedVariants[product.id])
                    ?.subvariants.map((subvariant) => (
                      <div
                        key={subvariant.id}
                        className="flex items-center space-x-2"
                      >
                        <button
                          onClick={() => handleVariantModalOpen(subvariant)}
                          className="py-1 px-2 bg-gray-600 text-white rounded-full hover:bg-indigo-600 transition duration-300 text-xs"
                        >
                          {subvariant.subvariant_name}
                        </button>
                        <span className="text-xs text-gray-300 font-semibold bg-indigo-500 py-0.5 px-2 rounded-full ml-2">
                          {subvariant.stock}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={variantModalOpen} onClose={handleVariantModalClose}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "transparent",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          backgroundImage: "linear-gradient(to right, #2d3748, #1a202c)"
        }}>
          <h3 className="text-xl font-bold text-center text-indigo-500 mb-4">
            Manage Stock for {selectedSubvariant?.subvariant_name}
          </h3>
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddStockModalOpen}
              className="w-1/2 py-2 px-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              Add Stock
            </button>
            <button
              onClick={handleRemoveStockModalOpen}
              className="w-1/2 py-2 px-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Remove Stock
            </button>
          </div>
        </Box>
      </Modal>

      <AddStockModal addStockModalOpen={addStockModalOpen} handleAddStockModalClose={handleAddStockModalClose} selectedSubvariant={selectedSubvariant} handleAddStock={handleAddStock} />

      <RemoveStockModal removeStockModalOpen={removeStockModalOpen} handleRemoveStockModalClose={handleRemoveStockModalClose} selectedSubvariant={selectedSubvariant} handleRemoveStock={handleRemoveStock} />
    </div>
  );
};

export default Product;
