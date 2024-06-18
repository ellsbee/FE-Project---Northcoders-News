function ArticleCard({articles}) {
    return(
        <ul className="article-card">
            <img src={articles.article_img_url}/>
            <h3>{articles.title}</h3>
        </ul>
    )
}

export default ArticleCard;