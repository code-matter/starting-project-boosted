import { DUMMY_NEWS } from '../../../../../lib/constants/dummy-news'
import { notFound } from 'next/navigation'
import React from 'react'

const ImagePage = ({ params }) => {
    const { newsId } = params
    const currentNews = DUMMY_NEWS.find(news => news.slug === newsId)
    if (!currentNews) notFound()

    return (
        <div className='fullscren-image'>
            <img
                src={`/images/news/${currentNews.image}`}
                alt={currentNews.title}
            />
        </div>
    )
}

export default ImagePage
