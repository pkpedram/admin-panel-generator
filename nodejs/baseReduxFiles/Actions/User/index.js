import axios from "axios";
import {toast} from "react-toastify";
import {ApiConfig} from "../../constants";
import _dataManager from "../../dataManager";

const userActions = {
    requestLoginCode: (data) => async (dispatch) => {
        try {
            dispatch({type: "LOADING_START"})
            let res = await axios.post(ApiConfig.baseUrl + "/api/accounts/otp/", data);
            console.log(res)
            if (res.data) {
                dispatch({type: "LOADING_END"})
                // dispatch({ type: "/api/accounts/otp/", payload: res.data });
            }
        } catch (error) {
            dispatch({type: "LOADING_START"})
            console.log(error)
        }
    },
    signUp: (data) => async (dispatch) => {
        try {
            dispatch({type: "LOADING_START"})
            let res = await axios.post(ApiConfig.baseUrl + "/api/accounts/register/", data);
            if (res.data) {
                dispatch({type: "LOADING_END"})
                localStorage.setItem("access", res.data.access);
                localStorage.setItem("refresh", res.data.refresh);
                window.location.replace('/')
            }
        } catch (error) {
            dispatch({type: "LOADING_START"})
            // console.log(error)
            toast.error(error.response.data.non_field_errors[0])
        }
    },
    getProfileInfo: (data = {}, params = {}) => async dispatch => {
        _dataManager.get('/api/accounts/profile/', data, {dispatch, params: params})
    },
    patchUserProfile: (data = {}) => async dispatch => {
        await _dataManager.patch('/api/accounts/profile/', data, {}, {}, true)
    },
    setIdentityStep: (data) => async (dispatch) =>
        dispatch({type: "SET_IDENTITY_STEP", payload: data}),
};

export default userActions;
