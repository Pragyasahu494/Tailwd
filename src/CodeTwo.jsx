// import { useState } from "react";

function CodeTwo() {
  // const [value, setValue] = useState(0)
  const praful = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

 const user = {
  "users": [
    {
      "id": 1,
      "name": "Praful",
      "city": "Pune"
    },
    {
      "id": 2,
      "name": "Amit",
      "city": "Mumbai"
    },
    {
      "id": 3,
      "name": "Rohit",
      "city": "Nagpur"
    }
  ]
}


  // const increment = () => {
  // }

  return (
    <>



      {/* <button onClick={()=>setValue(10000)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{value}</button> */}
      <div className="flex items-center justify-center mt-12 gap-10 ">

        {
          user.users.map((item, i)=>{
            return(
              <div key={i}>
                <table>
                    <th>
                      <tr>Id</tr> <td> {item.id}</td> 
                    </th>
                    <th>
                      <tr>Name</tr><td> {item.name}</td> 
                    </th>
                    <tr>City</tr> <td> {item.city}</td> 
                </table>
              
               
              
              </div>
            )
          })
        }

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