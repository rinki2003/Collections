import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCollection, removeFromCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const ResultCard = ({ item, showRemove = false }) => {
  const dispatch = useDispatch()

  const handleSave = (e) => {
    e.stopPropagation()
    dispatch(addToCollection(item))
    toast.success('Added to Collection!')
  }

  const handleRemove = (e) => {
    e.stopPropagation()
    dispatch(removeFromCollection(item.id))
    toast.info('Removed from Collection!')
  }

  const openInNewTab = () => {
    window.open(item.src, '_blank')
  }

  return (
    <div className="w-full bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
      {/* MEDIA */}
      <div className="relative">
        {/* PHOTO */}
        {item.type === 'photo' && (
          <img
            src={item.thumbnail}
            alt={item.title || 'image'}
            onClick={openInNewTab}
            className="w-full h-60 object-cover cursor-pointer hover:opacity-80 transition"
          />
        )}

        {/* VIDEO */}
        {item.type === 'video' && (
          <>
            <video
              src={item.src}
              poster={item.thumbnail}
              controls
              className="w-full h-60 object-cover"
              onClick={(e) => e.stopPropagation()}
            />
            <div onClick={openInNewTab} className="absolute inset-0 cursor-pointer" />
          </>
        )}
      </div>

      {/* INFO + SAVE / REMOVE */}
      <div className="p-4 flex justify-between items-center">
        <p className="text-white text-sm truncate w-3/4">{item.title || 'Untitled'}</p>

        {showRemove ? (
          <button
            onClick={handleRemove}
            className="bg-red-600 text-white text-xs px-3 py-1 rounded-full hover:bg-red-700"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700"
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default ResultCard
