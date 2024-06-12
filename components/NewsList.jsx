import Link from 'next/link'
import React from 'react'

const NewsList = ({ news }) => {
    return (
        <ul className='news-list'>
            {news.map(currentNews => {
                return (
                    <li key={currentNews.id}>
                        <Link href={`/news/${currentNews.slug}`}>
                            <img
                                src={`/images/news/${currentNews.image}`}
                                alt={currentNews.title}
                            />
                            <span>{currentNews.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NewsList
