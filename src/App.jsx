import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import ArticleList from './ArticleList'
import SingleArticleCard from './SingleArticleCard'
import { UserProvider } from './UserContext'
import './index.css'
import Topics from './Topics'

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
      {/* <Route path="/topics/:slug" element={<ArticleTopicList />} /> */}
    </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
