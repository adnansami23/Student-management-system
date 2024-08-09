
import StudentTable from "./StudentTable";

function StudentList({students,setStudents,getStudents}) {
   
  return (
  <>
  
      <h1> Students List</h1>
      <StudentTable students={students} setStudents={setStudents}/>


  {/* <div className='students-list'>
  {students && students.map((student)=>{
  return  <div key={student.id} className='student'>
    <h2>{student.name}</h2>
    <p>Age:{student.age}</p>
   </div>
  }
    )}
    </div> */}
   
    
     </>
  )
}

export default StudentList