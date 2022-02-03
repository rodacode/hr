import { useEffect, useState } from 'react'
import EmployeesList from '../components/EmployeesList'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../firebase'
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import AddEmployeeForm from '../components/AddEmployeeForm'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [employees, setEmployees] = useState<any>()

    useEffect(() => {
        try {
            const employeesColRef = query(collection(db, 'employees'), orderBy('created', 'desc'))
            onSnapshot( employeesColRef, (snapshot) => {
                setEmployees(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
              })))
            })

          } catch (err) {
            console.log(err);
          }
    }, []);

    return (
        <Box p={2} className='home__container'>
            <h1 className='home__title'>HR APP</h1>
            <Button onClick={onOpen}>Add employee</Button>
            <EmployeesList employees={employees} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddEmployeeForm onClose={onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )


}

export default Home