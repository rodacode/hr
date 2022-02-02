import EmployeesList from '../components/EmployeesList'


const Home = ( )=> {

    const employees = [
        {
            id: 0,
            name: "Johnn Perk",
            status: "checkin"
        },
        {
            id: 1,
            name: "Teresa Piol",
            status: "checkin"
        },
        {
            id: 2,
            name: "Manu Poir",
            status: "checkin"
        },
        {
            id: 3,
            name: "Ana Eerols",
            status: "checkin"
        }
    ]

    return (
        <div className='home__container'>
            <h3>HOME</h3>
            <EmployeesList employees={employees}/>
        </div>
    )


}

export default Home