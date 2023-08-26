// UserData.jsx
import React from 'react';
import '../ComponentCSS/ApiData.css';


const UserData = ({ users }) => {
  console.log('Received users:', users);
  return (
    <>
      {
        users.map((curUser) => {
          const { userId, jobTitleName, firstName, lastName, employeeCode, phoneNumber, emailAddress } = curUser;
          return (
            <tr key={userId}>
              <td>{userId}</td>
              <td>{jobTitleName}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{employeeCode}</td>
              <td>{phoneNumber}</td>
              <td>{emailAddress}</td>
            </tr>
          )
        }
        )}
    </>
  );
};

export default UserData;
