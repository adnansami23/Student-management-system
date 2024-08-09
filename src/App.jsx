import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState  } from 'react'
import './App.css'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import { db } from './firebaseConfig'


function App() {
  const [students, setStudents] = useState([])
  const getStudents = async()=>{
    try { const studentsCollection =  collection(db, 'students')
    const studentSnapshot=  await getDocs(studentsCollection)
    const studentList = studentSnapshot.docs.map(doc =>( 
      {
     id: doc.id,
    ...doc.data()
     
      }
  
    ) )
       setStudents(studentList)
    } catch (error) {
      
    }
   
  
    
    }
    useEffect(()=>{
      getStudents()
    },[])
    
  return (
    <div className='app-container'>
    <h1 className='app-title'>Student Management System</h1>
   <CreateStudent getStudents={getStudents}/>
   <StudentList students={students} setStudents={setStudents} getStudents={getStudents}/>
    </div>
  )
}

export default App
