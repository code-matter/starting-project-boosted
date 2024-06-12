import NewsList from '../../../components/NewsList'
import { DUMMY_NEWS } from '../../../lib/constants/dummy-news'
import React from 'react'

const News = () => {
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    )
}

export default News
