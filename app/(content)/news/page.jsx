import NewsList from '../../../components/NewsList'
import { getAllNews } from '../../../lib/utils/news'

const News = async () => {
    const news = await getAllNews()

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}

export default News
