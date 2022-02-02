import EmployeesList from '../components/EmployeesList'


const Home = ( )=> {

    const employees = [
        {
            id: 0,
            name: "Johnn Perk",
            status: "added"
        },
        {
            id: 1,
            name: "Teresa Piol",
            status: "active"
        },
        {
            id: 2,
            name: "Manu Poir",
            status: "inactive"
        },
        {
            id: 3,
            name: "Ana Eerols",
            status: "approved"
        }
    ]

    return (
        <div className='home__container'>
            <h3>HR APP</h3>
            <EmployeesList employees={employees}/>
        </div>
    )


}

export default Home