import React, { useState } from "react";
import { BackendClientRequest } from "../../services/ApiClient";


const ModalDelete = ({ toggleModal, selectedItem, refreshOverview }) => {
    console.log(selectedItem)
    const deleteManager = async () => {

        const path = "/api/user/delete"
        const token = localStorage.getItem('token');
        const headers = new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type':'application/json'
        })

        await BackendClientRequest(
            path, { "email" : selectedItem.email }, headers, "POST"
        ) 

        refreshOverview();
        toggleModal();
    }

    return (
        <>
            <div class="modal show" tabIndex={-1} role="dialog" style={{ display: "block" }}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-moesland text-white">
                            <h5 class="modal-title">Beheerder verwijderen </h5>
                        </div>
                        <form>
                            <div class="modal-body">
                                <p class="deleteModalText">Weet U zeker dat u dit beheerder wilt verwijderen?</p>
                            </div>
                            <div class="modal-footer">
                                <button onClick={deleteManager} type="button" class="btn btn btn-danger">Verwijderen</button>
                                <button onClick={toggleModal} type="button" class="btn btn-secondary" data-dismiss="modal">Anuleren</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDelete