import { notFound } from 'next/navigation'
import React from 'react'
import { getNewsItem } from '../../../../../lib/utils/news'

const ImagePage = async ({ params }) => {
    const { newsId } = params
    const currentNews = await getNewsItem(newsId)
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
