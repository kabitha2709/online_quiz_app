import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userData);
    };
    fetchUsers();
  }, []);
  const sortBy = (key) => {
    const sorted = [...users].sort((a, b) => {
      const aVal = (a[key] || "").toString().toLowerCase();
      const bVal = (b[key] || "").toString().toLowerCase();
      return aVal > bVal ? 1 : -1;
    });
    setUsers(sorted);
  };
  const filteredUsers = users.filter(user =>
    (user.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Registered Users</h2>
      <input type="text" placeholder="Search by name" className="form-control mb-3" onChange={(e) => setSearchTerm(e.target.value)} />
      <table className="table table-bordered table-hover table-striped mt-3">
        <thead>
          <tr>
            <th onClick={() => sortBy("name")} style={{ cursor: "pointer" }}>Name</th>
            <th onClick={() => sortBy("email")} style={{ cursor: "pointer" }}>Email</th>
            <th onClick={() => sortBy("phone")} style={{ cursor: "pointer" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name || "N/A"}</td>
              <td>{user.email || "N/A"}</td>
              <td>{user.phone || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
