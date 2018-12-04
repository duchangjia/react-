const LOGIN='LOGIN'
const LOGINOUT='LOGINOUT'
export function auth(state={isAuth:false,user:'李云龙'},action){
    switch(action.type){
        case LOGIN:
            return {...state, isAuth: true}
        case LOGINOUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}
export function Login(){
    return {type:LOGIN}
}
export function logout(){
    return {type:LOGINOUT}
}
