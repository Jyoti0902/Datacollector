import React from 'react';
import { useEffect, useState } from 'react';
import UserData from '../Components/UserData.jsx';
import '../ComponentCSS/ApiData.css';


//const API = "https://gist.githubusercontent.com/rominirani/8235702/raw/a50f7c449c41b6dc8eb87d8d393eeff62121b392/employees.json";
 
const API=[
  {
  "userId":"rirani",
  "jobTitleName":"Developer",
  "firstName":"Romin",
  "lastName":"Irani",
  "preferredFullName":"Romin Irani",
  "employeeCode":"E1",
  "region":"CA",
  "phoneNumber":"408-1234567",
  "emailAddress":"romin.k.irani@gmail.com"
  },
  {
  "userId":"nirani",
  "jobTitleName":"Developer",
  "firstName":"Neil",
  "lastName":"Irani",
  "preferredFullName":"Neil Irani",
  "employeeCode":"E2",
  "region":"CA",
  "phoneNumber":"408-1111111",
  "emailAddress":"neilrirani@gmail.com"
  },
  {
  "userId":"thanks",
  "jobTitleName":"Program Directory",
  "firstName":"Tom",
  "lastName":"Hanks",
  "preferredFullName":"Tom Hanks",
  "employeeCode":"E3",
  "region":"CA",
  "phoneNumber":"408-2222222",
  "emailAddress":"tomhanks@gmail.com"
  }
  ]

const ApiData = () => {
  const [users, setUsers] = useState(API);

  const fetchUsers = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
        if (data.length > 0) {
            setUsers(data); // Assuming setUsers is a function that updates your users data.
        }
    } catch (error) { // Use the caught error variable here
        console.error(error);
    }
};



  
  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div className="api-data-container">
    <h1>EMPLOYEES DATA</h1>
    <table className="user-table">
      <thead>
        <tr>
          <th>UserID</th>
          <th>JobTitle Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Employees Code</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
  </div>
  );
};

export default ApiData;
