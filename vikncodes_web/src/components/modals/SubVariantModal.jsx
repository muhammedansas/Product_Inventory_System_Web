import React from 'react'
import { Modal, Box, MenuItem, Select } from "@mui/material";
import { useGetProduct, useGetVariants } from '../../api/ProductApi';


const SubVariantModal = ({subvariantModalOpen,handleSubvariantModalClose,handleSubvariantSubmit,ProductClick,clickPoduct}) => {
    const { data: variants } = useGetVariants(clickPoduct);
    const { data: product ,isSuccess} = useGetProduct();
    if (!isSuccess) return <div>Loading product...</div>;
  return (
    <div>
        <Modal open={subvariantModalOpen} onClose={handleSubvariantModalClose}>
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
      Add Subvariant
    </h3>
    <form onSubmit={handleSubvariantSubmit}>
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
            <MenuItem onClick={() => ProductClick(productItem.id)} key={productItem.id} value={productItem.id}>
              {productItem.ProductName}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Related Variant
        </label>
        <Select
          name="variant"
          fullWidth
          className="bg-gray-800 text-gray-300"
          defaultValue=""
          required
        >
          {variants?.map((variant) => (
            <MenuItem key={variant.id} value={variant.id}>
              {variant.variant_name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Subvariant Name
        </label>
        <input
          type="text"
          name="subvariant_name"
          className="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Stock Quantity
        </label>
        <input
          type="number"
          name="stock"
          min="0"
         className="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
      >
        Create Subvariant
      </button>
    </form>
  </Box>
</Modal>
    </div>
  )
}

export default SubVariantModal