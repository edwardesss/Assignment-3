import React from "react"
import './UserDetails.css'


function UserDetails(props){
  function onEditUserClicked(event, user){
    props.onEditUser(user)
  }


  function onDeleteUserClicked(event, user){
    props.onDeleteUser(user);
  }


    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Tasks</th>
            <th>Progress Bar</th>
            <th></th>
          </tr>
          {props.users.map((user) => {
             return <tr>
                      <td data="Nameofclient">{user.name}</td>
                      <td>
                        <button className="btn btn-success" onClick={(event) => {onEditUserClicked(event, user)}}>To do list</button>
                      </td>
                      <td>{user.dateadded}</td>
                      <td>{user.typeoftransac}</td>
                      <td>
                          
                          <button className="btn btn-danger" onClick={(event) => {onDeleteUserClicked(event, user)}}>Delete </button>
          
                      </td>
                    </tr>
          })}

        </table>

    </div>
}


export default UserDetails;