import { NextResponse } from 'next/server'

// Function used to take a look at incoming request and maybe change it or do something (redirect, unauth, etc)

export const middleware = request => {
    return NextResponse.next()
}

// see nextjs docs for config
export const config = {
    matcher: '/news',
}
