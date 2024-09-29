import { useEffect, useState } from "react"
import { testReq } from "../../services/test/testService"

interface responseType{
    userId: number,
    title: string,
    completed: boolean,
}

export const Sample = () => {

    const [sampleData, setSampleData] = useState<responseType>()

    const init = () => {
        testReq().then(response => {
            if(response?.status === 200) {
                setSampleData(response.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            샘플 테스트용 페이지 입니다.
            <div>
                <h1>test data</h1>
                <div>{sampleData?.userId}</div>
                <div>{sampleData?.title}</div>
                <div>{sampleData?.completed ? 'true' : 'false'}</div>
            </div>
        </div>
    )
}