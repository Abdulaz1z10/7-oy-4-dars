import React, { useState } from 'react'
import axiosClient from '../plugins/axiosClient';
import ModalApp from './ModalApp';

export default function Auth() {
    const [roles, setRoles] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault();
        let username = e.target[0].value
        let password = e.target[1].value
        axiosClient.post('/admins/login', {
            username,
            password
        }).then((res)=>{
            localStorage.setItem('token', res?.data?.token)
            setRoles(res?.data?.roles)
        }).catch((e)=>{
            console.log(e)
    })
    }
return (
    <div className='container'>
        <ModalApp open={modalVisible} toggle={()=>setModalVisible(false)} roles={roles}/>
        <div className='row'>
        <div className="col-md-6 offset-3">
            <div className="card">
                <div className="card-header">
                    <h1 className='text-center'>Auth</h1>
                </div>
                <div className="card-body">
                    <form id='form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username' className='form-control my-2'/>
                        <input type="password" placeholder="password" className='form-control my-2' />
                    </form>
                </div>
                <div className="card-footer">
                    <button className='btn btn-success' form='form'>Login</button>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}
