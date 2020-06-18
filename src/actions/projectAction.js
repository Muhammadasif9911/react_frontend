import axios from 'axios'
import { GET_ERRORS, GET_WALLETS, DELETE_WALLET, GET_WALLET } from './types'

export const createWallet = (newWallet, history) => async dispatch => {
    await axios.post('/blood', newWallet)
        .then((res) => {
            history.push('/dashboard')
        })
        .catch((err) => {
            dispatch({ type: GET_ERRORS, payload: err.response.data })
        })
}

export const updateWallet = (id,updateWallet, history) => async dispatch => {
    let url = `/blood/${id}`;
    console.log(history);
    await axios.put(`/blood/${id}`, updateWallet)
         .then((res) => {
             history.push('/dashboard')
         })
         .catch((err) => { 
            console.log(err)
            //dispatch({ type: GET_ERRORS, payload: err.response.data })
         })
}


export const getWallets = () => async dispatch => {
    await axios.get('/blood')
        .then((res) => {
            
            dispatch({ type: GET_WALLETS, payload: res.data })
        })

}


export const deleteWallet = (id) => async dispatch => {
    await axios.delete(`/blood/${id}`)
        .then((res) => {
            
            dispatch({ type: DELETE_WALLET, payload: id })
        })

}

export const getWallet = (id) => async dispatch => {

    await axios.get(`/blood/${id}`)
         .then((res) => {
            
            dispatch({ type: GET_WALLET, payload: res.data })
         })

}