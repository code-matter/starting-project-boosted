import NewsList from '../../../components/NewsList'

const News = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API}/news`)

    if (!response.ok) throw new Error('Failed to fetch news..')
    const news = await response.json()

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}

export default News
