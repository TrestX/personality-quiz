import axios from "axios";

const baseurl = "http://13.232.69.84:6020/api/v1"

export function getQuizType() {
    return axios.get(baseurl + "/quiztype");
}
export function getUserStatus() {
    const user = sessionStorage.getItem("user")
    return axios.get(baseurl + "/userprogress/" + user);
}
export function setUserStatus(id, done) {
    const user = sessionStorage.getItem("user")
    const data = {
        "user_id": user,
        "progress": [{
            "quiz_type": id,
            "done": done
        }]
    }
    const config = {
        method: "post",
        "url": baseurl + "/userprogress",
        data: data
    }
    return axios(config);
}
export function assignQuestions(id) {
    const user = sessionStorage.getItem("user")
    const data = {
        "user_id": user,
        "quiz_type_id": id
    }
    const config = {
        method: "post",
        "url": baseurl + "/assignuser",
        data: data
    }
    return axios(config);
}
export function getAssignQuestions(id) {
    const user = sessionStorage.getItem("user")

    const config = {
        method: "get",
        "url": baseurl + "/assignuser/" + id + "/" + user
    }
    return axios(config);
}
export function updateAssignQuestions(id, answer, qNumber) {
    const config = {
        method: "patch",
        "url": baseurl + "/assignuser/" + id + "/" + answer + "/" + qNumber
    }
    return axios(config);
}