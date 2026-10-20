import React from 'react'

const List = () => {


    const users = [
      { id: 1, name: "Abhi" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Aman" },
    ];
    


  return (
    <div>
      <h1>List Component</h1>

      {
        users.map((user)=>{
          return <li key={user.id}>{user.name}</li>

        })
      }
      
    </div>
  )
}

export default List
