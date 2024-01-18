import React from 'react'
import axiosClient from './../plugins/axiosClient';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

export default function DeleteModal({open, toggle, id}) {
    const deleteUser =()=>{
        axiosClient.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.location.reload();
          }
        });
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalBody>
        <h3>Are you sure you want delete ?</h3>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-info" onClick={toggle}>
          cancel
        </button>
        <button className="btn btn-danger" onClick={deleteUser}>
          delete
        </button>
      </ModalFooter>
    </Modal>
  );
}
