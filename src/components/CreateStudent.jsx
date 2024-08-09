import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db} from '../firebaseConfig'

function CreateStudent({getStudents}) {
  const [rollNo, setRollNo] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
   const [isCreatingStudent, setisCreatingStudent] = useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            setisCreatingStudent(true)
             await addDoc(collection(db,'students'),{
              rollNo:Number(rollNo),
                name:name,
                age:Number(age)
             })
             setRollNo('')
             setName ('')
             setAge('')
             setisCreatingStudent(false)
            await getStudents()
        } catch (error) {
            // console.log("Error creating user:",error)
            setisCreatingStudent(false)
        }
    }
  return (
   <form onSubmit={handleSubmit} className="form">
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
  placeholder='Enter student name' required/>
    <input type="number" value={rollNo} onChange={(e)=>setRollNo(e.target.value)}
  placeholder='Enter student rollNo' required/>
    
    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} 
        placeholder='Enter student age' />
    <button type='submit'>{isCreatingStudent ? 'Creating...': 'create student'} </button>
  </form>  )
}

export default CreateStudent