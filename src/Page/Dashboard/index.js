import React, {useState} from 'react'
import { employeesData } from '../../data'
import Swal from 'sweetalert2';

import Edit from './Edit'
import Header from './Header'
import List from './List'
import Add from './Add'

function Dashboard() {
    const [employees, setemployees] = useState(employeesData);
    const [adding , setadding] = useState(false);
    const[editing, setediting] = useState(false);
    const[selectedemployees, setselectedemployees] = useState(null);
    
    const handleedit = (id)=>{
        const [employee] = employees.filter(employee => employee.id === id);

        setselectedemployees(employee);
        setediting(true);
    }    

    const handledelete = (id)=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setemployees(employees.filter(employee => employee.id !== id));
            }
        });
    }




  return (
    <div className='container'>
        {!adding && !editing &&(
            <>
                <Header 
                setadding={setadding}
                />
                
                <List 
                employees={employees}
                handleedit={handleedit}
                handledelete={handledelete}
                />
            </>
        )}
        

        {adding && (
            <Add
            employees={employees}
            setemployees={setemployees}
            setadding={setadding}
            />
        )}


        {editing && (
            <Edit
            employees={employees}
            selectedemployees={selectedemployees}
            setemployees={setemployees}
            setediting={setediting}
            />
        )}

    </div>
  )
}

export default Dashboard