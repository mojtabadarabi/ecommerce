import { useState } from 'react'

interface Props {
    apiCall: () => Promise<unknown>
    loadingFor?: string
}

export default function useApiCall(props: Props): any {
    const { loadingFor = 'api_call', apiCall } = props

    const [isLoading, setIsLoading] = useState<false | { loadingFor: string }>(false)
    const [data, setData] = useState<any>(null)

    const apiCallHandler = async () => {
        try {
            setIsLoading({ loadingFor })
            const apiData = await apiCall()
            setData(apiData)
            setIsLoading(false)
        } catch (error) {

        }
    }
    return [apiCallHandler, { isLoading, data }]
}
