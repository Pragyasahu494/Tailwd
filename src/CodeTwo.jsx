// import { useState } from "react";

function CodeTwo() {
  // const [value, setValue] = useState(0)
  const praful = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

 const user = {
  "users": [
    {
      "id": 1,
      "name": "Praful",
      "age": 25,
      "contact": 9876543210,
      "city": "Pune"
    },
    {
      "id": 2,
      "name": "Amit",
      "age": 30,
      "contact": 9876543211,
      "city": "Mumbai"
    },
    {
      "id": 3,
      "name": "Rohit",
      "age": 28,
      "contact": 9876543212,
      "city": "Delhi"
    },
    {
      "id": 4,
      "name": "Snehal",
      "age": 26,
      "contact": 9876543213,
      "city": "Bangalore"
    },
    {
      "id": 5,
      "name": "Neha", 
      "age": 24,
      "contact": 9876543214,
      "city": "Chennai"
    },
    {
      "id": 6,
      "name": "Karan",
      "age": 29,
      "contact": 9876543215,
      "city": "Hyderabad"
    },
    {
      "id": 7,
      "name": "Anjali",
      "age": 27,
      "contact": 9876543216,
      "city": "Kolkata"
    },
    {
      "id": 8,
      "name": "Vikram",
      "age": 31,
      "contact": 9876543217,
      "city": "Ahmedabad"
    },
    {
      "id": 9,
      "name": "Pooja",
      "age": 25,
      "contact": 9876543218,
      "city": "Jaipur"
    },
    {
      "id": 10,
      "name": "Raj",
      "age": 32,
      "contact": 9876543219,
      "city": "Lucknow"
    }
  ]
}


  // const increment = () => {
  // }

  return (
    <>



      {/* <button onClick={()=>setValue(10000)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{value}</button> */}
      <div className="flex items-center justify-center mt-12 gap-10 ">

        <table className="border-collapse border border-gray-300 w-full max-w-4xl">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-300 p-3 text-center">ID</th>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">Age</th>
              <th className="border border-gray-300 p-3 text-left">City</th>
              <th className="border border-gray-300 p-3 text-left">Contact No.</th>
            </tr>
          </thead>
          <tbody>
            {user.users.map((item, i) => {
              return (
                <tr key={i} className="hover:bg-gray-100 transition-colors">
                  <td className="border border-gray-300 p-3">{item.id}</td>
                  <td className="border border-gray-300 p-3">{item.name}</td>
                  <td className="border border-gray-300 p-3">{item.age}</td>
                  <td className="border border-gray-300 p-3">{item.city}</td>
                  <td className="border border-gray-300 p-3">{item.contact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* {
          praful.map((item, i) => {
            return (
                <div key={i} id={i}>{item}</div>

            )
          })
        } */}




        {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
        <h1>{value}</h1>
        <button onClick={increment} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Increment</button> */}
      </div>
    </>
  )
}

export default CodeTwo;