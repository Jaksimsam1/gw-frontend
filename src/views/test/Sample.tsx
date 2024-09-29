import { useEffect } from "react"
import { testReq } from "../../services/test/testService"

export const Sample = () => {

    const init = () => {
        testReq().then(data => {
            if(data?.status === 200) {
                console.log(data)
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
        </div>
    )
}