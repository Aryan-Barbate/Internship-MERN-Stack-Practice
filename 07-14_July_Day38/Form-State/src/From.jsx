import React, { useState } from 'react'

const From = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    email: '',
    mobno: ''
  })
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div>
      <h2>Login Form</h2>
      <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <br /><br />
      <input name="age" placeholder="Age" value={data.age} onChange={handleChange} />
      <br /><br />
      <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <br /><br />
      <input name="mobno" placeholder="Mob No" value={data.mobno} onChange={handleChange} />
      <br /><br />
      <button onClick={() => setShow(true)}>Login</button>

      {show && (
        <div>
          <h3>Your Info</h3>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
          <p>Mob No: {data.mobno}</p>
        </div>
      )}
    </div>
  )
}

export default From
