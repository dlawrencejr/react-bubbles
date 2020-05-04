import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getToken} from '../utils/axiosWithAuth'

export default function PrivateRouter(props){
    const {component: Component,...rest} = props;

    return (
        <Route {...rest} render = {props => {
            if(getToken()){
                return <Component {...props}/>
            }
            else{
                return <Redirect to = '/login'/>
            }
        }}
        />
    );
}