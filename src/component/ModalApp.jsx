import React from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import axiosClient from '../plugins/axiosClient'
import { useNavigate } from 'react-router-dom'

export default function ModalApp({open, toggle, roles}) {
    const navigate = useNavigate()
    const handleRole =(e)=>{
        e.preventDefault()
        let role = e.target[0].value
        axiosClient.post('/admins/set-role', {
            role: e.target[0].value
        }).then((res)=>{
            if(res.status === 202){
                if(role === 'admin'){
                    navigate('/admin')
                }else if(role === 'superadmin'){
                    navigate('/super_admin')
                }
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Select your role</h1>
        </ModalHeader>
        <ModalBody>
            <form id='role' onSubmit={handleRole}>
            <select className='form-control my-2'>
            <option value="" hidden>Select your role</option>
            {
                roles.map((item, index)=> <option value={item} key={index}>{item}</option>)
            }
            </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-success' form='role' type='submit'>Save</button>
        </ModalFooter>
    </Modal>
  )
}
