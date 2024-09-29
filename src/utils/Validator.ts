import { isEmpty } from "lodash"

export default class Validator {
    static isEmpty = (param: any) => {
        return isEmpty(param)
    }
}