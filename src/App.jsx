import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import ArticleList from './ArticleList'
import SingleArticleCard from './SingleArticleCard'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article" element={<ArticleList />} />
      <Route path="/article/:article_id" element={<SingleArticleCard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
