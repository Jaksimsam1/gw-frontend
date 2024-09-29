import { useEffect } from "react"
import { testReq } from "../../services/test/testService"

export const Sample = () => {

    const init = () => {
        testReq().then(data => {
            console.log(data)
        })
        .catch(err => {

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