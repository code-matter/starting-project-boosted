import NewsList from '../../../../components/NewsList'
import { getLatestNews } from '../../../../lib/utils/news'
import React from 'react'

const Latest = () => {
    const latestNews = getLatestNews()
    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    )
}

export default Latest
