import React, { useEffect, useState } from 'react'
import axiosClient from './../plugins/axiosClient';
import UsersModal from './UsersModal';
import DeleteModal from './DeleteModal';

export default function SuperAdmin() {
  const [users, setUsers] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [user, setUser] = useState('')
  const [id, setId] = useState()
  useEffect(()=>{
    axiosClient.get('/users').then((res)=>{
      console.log(res)
      setUsers(res?.data?.users)
    }).catch(err=>{
      console.log(err)
    })
},[])
const openDeleteModal =(id)=>{
  setId(id)
  setDeleteModal(true)
}
const openEditModal =(item)=>{
    setUser({...item})
    setModalVisible(true)
}
const toggle =()=>{
  setModalVisible(false)
  setUser('')
}
  return (
    <div className='container'>
      <UsersModal open={modalVisible} toggle={toggle} user={user}/>
      <DeleteModal open={deleteModal} toggle={()=>setDeleteModal(false)} id={id}/>
      <button className='btn btn-info' onClick={()=>setModalVisible(true)}>Add user</button>
      <div className='row'>
      <div className='col-md-8 offset-2'>
      <table className='table table-bordered'>
      <thead>
        <tr>
          <th>T/r</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Is diploma</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item, index)=>{
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.age}</td>
                <td>{item.is_diploma ? "true" : "false"}</td>
                <td>{item.address}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>openEditModal(item)}>edit</button>
                  <button className='btn btn-danger' onClick={()=>openDeleteModal(item._id)}>delete</button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}


