
import React, {useRef, useState, useEffect } from 'react';
import './UserForm.css';
// import ColorSwitches from './switch'
import './firebase.js';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase.js"


function UserForm(props){
    let nameRef = useRef();
    let descRef = useRef();
    let addRef = useRef();
    let servRef = useRef();
    let servRef2 = useRef();
    let imgprofRef = useRef();


    

    function onCreateUser(event) {
        event.preventDefault();
        let user = {
            name: nameRef.current.value,
            description: descRef.current.value,
            address: addRef.current.value,
            imageprof: imgprofRef.current.value,
            serviceofloa: servRef.current.value,
            serviceofloa2: servRef2.current.value,
        }

        // console.log(user);
        props.onCreateUser(user)
    }
    

    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3>Add new person</h3>
                        <div class="user-form">
                            <form onSubmit={onCreateUser}>
                                <div>
                                    <input type="text" placeholder="Name" ref={nameRef} defaultValue={props.editMode ? props.user.name : ''}/>

                                    <input type="description" placeholder="Description" ref={descRef} defaultValue={props.editMode ? props.user.description : ''}/>

                                    <input type="address" placeholder="Address" ref={addRef} defaultValue={props.editMode ? props.user.address : ''}/>

 
                                    <input type="file" class="form-control" ref={imgprofRef} defaultValue={props.editMode ? props.user.imgprof : ''}/>
                                </div>

                                <table className="users-table">
                                    <tr>
                                    <th>Task</th>
                                    <th>Reminder</th>
                                    <th>Document</th>
                                    <th>Status</th>
                                    <th></th>
                                    </tr>
                                    <tr>
                                        <td>Task 1</td>
                                        <td>
                                            <input type="text" ref={servRef} defaultValue={props.editMode ? props.user.serviceofloa : ''}/>
                                        </td>
                                        <td>
                                            <form>
                                                <label>Task 1 files: </label>
                                                <input
                                                    label="upload"
                                                    type="file"
                                                    onChange

                                                />

                                            </form>
                                        </td>
                                          

                                        <td>
                                            <label>Task 1 checkbox: </label>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>Task 2</td>
                                        <td>
                                            <input type="text" ref={servRef2} defaultValue={props.editMode ? props.user.serviceofloa2 : ''}/>
                                        </td>
                                        <td>
                                     
                                            <form>
                                                <label>Task 2 files: </label>
                                                <input
                                                    label="upload"
                                                    type="file"
                                                    onChange

                                                />
                                            </form>
                                        </td>
                                          

                                        <td>
                                          <label>Task 2 checkbox: </label>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </td>
                                    </tr>
                                
                                </table>
                                <button className='add-user-button'>{props.editMode ? 'Update' : 'Add'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;