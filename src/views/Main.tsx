import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <div>
            작심삼일 develop Main Page <br />
            <Link to="/sample">샘플 테스트페이지 Go</Link>
        </div>
    )
}