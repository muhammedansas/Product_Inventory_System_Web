import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const RemoveStockModal = ({removeStockModalOpen,handleRemoveStockModalClose,selectedSubvariant,handleRemoveStock}) => {
  return (
    <div>
        <Modal open={removeStockModalOpen} onClose={handleRemoveStockModalClose}>
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
            Remove Stock for {selectedSubvariant?.subvariant_name}
          </h3>

          <form onSubmit={handleRemoveStock}>
          <div className="mb-4">
            {/* Display the Subvariant Name */}
            <label className="block text-sm font-medium text-gray-300">Subvariant Name</label>
            <input
              type="text"
              name='subvariant_name'
              value={selectedSubvariant?.subvariant_name}
              readOnly
              className="w-full px-3 py-2 bg-white border border-white rounded-lg focus:outline-none text-gray-900"
            />
          </div>

          <div className="mb-4">
            {/* Display the Current Stock */}
            <label className="block text-sm font-medium text-gray-300">Current Stock</label>
            <input
              type="text"
              value={selectedSubvariant?.stock}
              readOnly
              className="w-full px-3 py-2 bg-white border border-white rounded-lg focus:outline-none text-gray-900"
            />
          </div>

          <div className="mb-4">
            {/* Stock Count Input */}
            <label className="block text-sm font-medium text-gray-300">Remove Stock Count</label>
            <input
              type="number"
              name='stock'
              min="1"
              className="w-full px-3 py-2 bg-white border border-white rounded-lg focus:outline-none text-gray-900"
            />
          </div>

          <div className="flex justify-between">
            <button
            type='submit'
              className="w-1/2 py-2 px-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Remove Stock
            </button>
            <button
              onClick={handleRemoveStockModalClose}
              className="w-1/2 py-2 px-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default RemoveStockModal