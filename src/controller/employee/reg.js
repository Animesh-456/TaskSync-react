import axios from "axios"
const URL = 'http://localhost:4000';
const add = async (user) => {


    try {

        const response = await axios.post(`${URL}/register`, user);
        var usr = JSON.stringify(user);
        localStorage.setItem("empdetails", usr)
        return response
    } catch (error) {
        throw error
    }

}

export default add