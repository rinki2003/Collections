import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

export const ResultGrid = () => {
  const { query, activeTab, results, loading, error } =
    useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      if (!query) return

      try {
        dispatch(setLoading())

        let data = []

        if (activeTab === 'photos') {
          const response = await fetchPhotos(query)
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }))
        }

        if (activeTab === 'videos') {
          const response = await fetchVideos(query)
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user?.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
          }))
        }

        dispatch(setResults(data))
        console.log(data)
      } catch (err) {
        console.error(err)
        dispatch(setError('Failed to fetch data'))
      }
    }

    getData()
  }, [query, activeTab, dispatch])

 return (
  <div className="p-6 bg-gray-900 min-h-screen">
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
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  </div>
)

}

export default ResultGrid
