import EmployeesListItem from "./EmployeesListItem"

const EmployeesList = ({ employees } : {employees:any}) => {

    return (
        <div className="employeesList__container">
            <h3>Employees List</h3>
            {
                employees && employees.map((employee:any) => {
                    return (
                        <EmployeesListItem employee={employee}/>
                    )
                })
            }
        </div>
    )
}

export default EmployeesList