import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ResultGrid from '../components/ResultGrid'
import Tabs from '../components/Tabs'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  const { query } = useSelector((store) => store.search)

  return (
    <div>
     

      <SearchBar />

      {query !== '' && (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  )
}

export default HomePage
