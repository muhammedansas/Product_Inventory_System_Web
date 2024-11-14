import React, { useState } from "react";
import {
  useCreateProduct,
  useGetProduct,
  useCreateVariant,
  useCreateSubVariants,
} from "../api/ProductApi";
import VariantModal from "../components/modals/VariantModal";
import SubVariantModal from "../components/modals/SubVariantModal";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const [clickPoduct,SetClickProduct] = useState(null)

    const ProductClick = (id) =>{
        SetClickProduct(id)
    }

    const { mutate: createProduct } = useCreateProduct();
    const { data: product } = useGetProduct();
    const { mutate: createVariant } = useCreateVariant();
    const { mutate: createSubvariant } = useCreateSubVariants();
  
    const [variantModalOpen, setVariantModalOpen] = useState(false);
    const [subvariantModalOpen, setSubvariantModalOpen] = useState(false);
  
    const handleVariantModalOpen = () => setVariantModalOpen(true);
    const handleVariantModalClose = () => setVariantModalOpen(false);
    const handleSubvariantModalOpen = () => setSubvariantModalOpen(true);
    const handleSubvariantModalClose = () => setSubvariantModalOpen(false);

    
  
    const handleProductSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      createProduct(formData);
    };
  
    const handleVariantSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      createVariant(formData);
    };
  
    const handleSubvariantSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      createSubvariant(formData);
    };

    

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300">
        <div>
        <ToastContainer />
      </div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-500 mb-4">
          Add New Product
        </h2>

        <form onSubmit={handleProductSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-300">
                Product ID
              </label>
              <input
                type="number"
                name="ProductID"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-300">
                Product Code
              </label>
              <input
                type="text"
                name="ProductCode"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Product Name
            </label>
            <input
              type="text"
              name="ProductName"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Product Image
            </label>
            <input
              type="file"
              name="ProductImage"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none text-gray-300"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Created User
            </label>
            <input
              type="text"
              value={product?.user?.username}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
              disabled
            />
            <input type="hidden" name="CreatedUser" value={product?.user?.id} />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-1/2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Create Product
            </button>

            <button
              type="button"
              onClick={handleVariantModalOpen}
              className="w-1/2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Add Variant
            </button>
          </div>
        </form>
      </div>

      <VariantModal handleVariantModalClose={handleVariantModalClose} variantModalOpen={variantModalOpen} handleVariantSubmit={handleVariantSubmit} handleSubvariantModalOpen={handleSubvariantModalOpen}/>

      <SubVariantModal subvariantModalOpen={subvariantModalOpen} handleSubvariantModalClose={handleSubvariantModalClose} handleSubvariantSubmit={handleSubvariantSubmit} clickPoduct={clickPoduct} SetClickProduct={SetClickProduct} ProductClick={ProductClick}/>

    </div>
  );
};

export default AddProducts;