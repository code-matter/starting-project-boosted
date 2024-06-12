// INTERCEPTOR PAGE not @ ?!?!
import { notFound } from 'next/navigation'
import React from 'react'
import ModalBackdrop from '../../../../../../components/ModalBackdrop'
import { getNewsItem } from '../../../../../../lib/utils/news'

const InterceptedImagePage = async ({ params }) => {
    const { newsId } = params
    const currentNews = await getNewsItem(newsId)
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
