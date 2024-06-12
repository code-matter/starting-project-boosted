import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { getNewsItem } from '../../../../lib/utils/news'

const NewsId = async ({ params }) => {
    const { newsId } = params
    const currentNews = await getNewsItem(newsId)

    if (!currentNews) notFound()

    return (
        <article className='news-article'>
            <header>
                <Link href={`/news/${currentNews.slug}/image`}>
                    <img
                        src={`/images/news/${currentNews.image}`}
                        alt={currentNews.title}
                    />
                </Link>
                <h1>{currentNews.title}</h1>
                <time dateTime={currentNews.date}>{currentNews.date}</time>
            </header>
            <main>
                <p>{currentNews.content}</p>
            </main>
        </article>
    )
}

export default NewsId
