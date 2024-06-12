import React from 'react'

const NewsLayout = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    )
}

export default NewsLayout
