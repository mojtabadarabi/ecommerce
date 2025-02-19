import { HTTP_METHOD } from "next/dist/server/web/http"

interface Props {
    url: string
    method?: HTTP_METHOD
    body?: any
    headers?: any
}

export const Fetch = (props: Props) => {
    const { url, method = 'get', body = null, headers = {} } = props

    const completeUrl = `${process.env.NEXT_PUBLIC_BASE_API}${url}`

    return fetch(completeUrl, {
        method,
        cache: 'force-cache',
        headers,
        ...(body ? { body } : {})
    })
}