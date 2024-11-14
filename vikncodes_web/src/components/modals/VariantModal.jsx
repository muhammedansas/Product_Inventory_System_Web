import React from 'react'
import { Modal, Box, MenuItem, Select } from "@mui/material";
import { useGetProduct } from '../../api/ProductApi';


const VariantModal = ({handleVariantModalClose,variantModalOpen,handleVariantSubmit,handleSubvariantModalOpen}) => {
    const { data: product } = useGetProduct();
  return (
    <div>
        <Modal open={variantModalOpen} onClose={handleVariantModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "transparent",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            backgroundImage: "linear-gradient(to right, #2d3748, #1a202c)",
          }}
        >
          <h3 className="text-xl font-bold text-center text-indigo-500 mb-4">
            Add Variant
          </h3>
          <form onSubmit={handleVariantSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Product Name
              </label>
              <Select
                name="product"
                fullWidth
                className="bg-gray-800 text-gray-300"
                defaultValue=""
                required
              >
                {product?.products?.map((productItem) => (
                  <MenuItem key={productItem.id} value={productItem.id}>
                    {productItem.ProductName}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Variant Name
              </label>
              <input
                type="text"
                name="variant_name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="flex gap-3 mb-6">
              <button
                type="submit"
                className="w-1/2 py-2 px-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
              >
                Create Variant
              </button>
              <button
                type="button"
                onClick={handleSubvariantModalOpen}
                className="w-1/2 py-2 px-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
              >
                Add Subvariant
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default VariantModal