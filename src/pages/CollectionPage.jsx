import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ResultCard from '../components/ResultCard'
import { clearCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const CollectionPage = () => {
  const { items } = useSelector((state) => state.collection)
  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(clearCollection())
    toast.info('Collection cleared!')
  }

  return (
    <div className="p-6 min-h-screen bg-gray-950">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-white">My Collection</h1>
        {items.length > 0 && (
          <button
            onClick={handleClear}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="text-white text-lg">No items in your collection yet.</p>
      ) : (
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6
          "
        >
          {items.map((item) => (
            <ResultCard key={item.id} item={item} showRemove={true} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CollectionPage
