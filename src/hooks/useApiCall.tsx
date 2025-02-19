import { useState } from 'react'

interface Props {
    apiCall: () => Promise<unknown>
    loadingFor?: string
}

type APICallType = [() => void, { isLoading: false | { loadingFor: string }, data: unknown }]

export default function useApiCall(props: Props): APICallType {
    const { loadingFor = 'api_call', apiCall } = props

    const [isLoading, setIsLoading] = useState<false | { loadingFor: string }>(false)
    const [data, setData] = useState<unknown>(null)

    const apiCallHandler = async () => {
        try {
            setIsLoading({ loadingFor })
            const apiData = await apiCall()
            setData(apiData)
            setIsLoading(false)
        } catch (error) {
            return error
        }
    }
    return [apiCallHandler, { isLoading, data }]
}
