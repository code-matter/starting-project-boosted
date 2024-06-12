import { DUMMY_NEWS } from '../../../../lib/constants/dummy-news'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const NewsId = ({ params }) => {
    const slug = params.newsId
    const currentNews = DUMMY_NEWS.find(news => news.slug === slug)

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
