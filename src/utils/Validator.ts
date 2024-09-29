import { isEmpty } from "lodash"

/**
 * 유틸리티 함수를 작성하는 클래스
 * 작성자: 강성혁
 * 최초작성일: 2024-09-29
 * 설명: 유틸리티 함수를 정의하는 클래스를 작성한다.
 */
export default class Validator {
    static isEmpty = (param: any) => {
        return isEmpty(param)
    }

    // 이하 내용 편하게 추가하고 싶은 유틸성 함수 작성해서 커밋하세요~!
}