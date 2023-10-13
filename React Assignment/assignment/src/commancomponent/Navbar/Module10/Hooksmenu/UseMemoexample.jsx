import React,{useMemo,useState} from 'react';

const UseMemoexample = () => {
    const[StudentIndex, setStudentIndex]=useState(0);
    const students=["raxit","nirali","nikhil","anil","ajay"];
    const  student=students[StudentIndex];
    const computeStudentcount = (student) =>{
        let i = 0;
        while (i < 100000) i++;
        return student.length;
    }
    const studentCount =useMemo(()=> computeStudentcount(student))

    return (
        <div>
            <p>use memo react hooks</p>
"{student} has{studentCount}"
             <button onClick={() => {
                if (StudentIndex + 1 === student.length) {
                    setStudentIndex(0);
                } else {
                    setStudentIndex(StudentIndex + 1);
                }
            }}>
                Click
            </button>
        </div>
    );
};

export default UseMemoexample;


