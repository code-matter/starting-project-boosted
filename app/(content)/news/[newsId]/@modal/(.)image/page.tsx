// INTERCEPTOR PAGE
import { DUMMY_NEWS } from '../../../../../../lib/constants/dummy-news' // WHY not @ ?!?!
import { notFound } from 'next/navigation'
import React from 'react'
import ModalBackdrop from '../../../../../../components/ModalBackdrop'

const InterceptedImagePage = ({ params }) => {
    const { newsId } = params
    const currentNews = DUMMY_NEWS.find(news => news.slug === newsId)
    if (!currentNews) notFound()

    return (
        <>
            <ModalBackdrop />
            <dialog className='modal' open>
                <div className='fullscreen-image'>
                    <img
                        src={`/images/news/${currentNews.image}`}
                        alt={currentNews.title}
                    />
                </div>
            </dialog>
        </>
    )
}

export default InterceptedImagePage
