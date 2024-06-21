import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import ArticleList from './ArticleList'
import SingleArticleCard from './SingleArticleCard'
import { UserProvider } from './UserContext'
import './index.css'
import Topics from './Topics'
import NotFound from './NotFound'

function App() {
  const user = ''
  return (
    <UserProvider>
    <BrowserRouter>
    <Header user={user}/>
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article" element={<ArticleList />} />
      <Route path="/article/:article_id" element={<SingleArticleCard />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
