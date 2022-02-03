import { useState } from 'react';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';
import {
    Box,
    Button,
    Input,
    Text,
    useToast,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { EMPLOYEE_STATUS_TYPES } from '../constants'

const EmployeesListItem = ({ employee }: { employee: any }) => {
    const [inputValue, setInputValue] = useState<string>(employee.data.name)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const [activeStep, setActiveStep] = useState<number>(EMPLOYEE_STATUS_TYPES.indexOf(employee.data.status))

    const handleStatusUpdate = async (e: any, index: number) => {
        setActiveStep(index)
        e.preventDefault()
        const employeeDocRef = doc(db, 'employees', employee.id)
        try {
            await updateDoc(employeeDocRef, {
                status: EMPLOYEE_STATUS_TYPES[index]
            })
        } catch (err) {
            alert(err)
        }
    }

    const handleEmployeeUpdate = async (e: any) => {
        e.preventDefault()
        const employeeDocRef = doc(db, 'employees', employee.id)
        try {
            await updateDoc(employeeDocRef, {
                name: inputValue
            })
            onClose()
        } catch (err) {
            alert(err)
        }
    }


    const handleDelete = async () => {
        const employeeDocRef = doc(db, 'employees', employee.id)
        try {
            await deleteDoc(employeeDocRef)
            toast(
                {
                    title: `Employee "${employee.id}" deleted`,
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                }
            )
        } catch (err) {
            alert(err)
        }

    }

    return (
        <>
            {
                employee && (
                    <div className="employeesListItem__container">
                        <Box maxW="300px" minW="300px">
                            <Text fontSize={"lg"}>{employee.data.name}</Text>
                        </Box>
                        <div className="employeesListItemStatus__container">
                            {EMPLOYEE_STATUS_TYPES.map((step: string, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={(e) => handleStatusUpdate(e, index)}
                                        className={`${index === 0 ? 'step1' : 'step'} step${index + 1} ${activeStep === index ? 'active' : ''}`}>
                                        <span className="step__text">{step}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <Tooltip label='edit employee'>
                            <EditIcon
                                ml={4}
                                onClick={onOpen}
                                _hover={{
                                    color: '#0299F5',
                                }} />
                        </Tooltip>
                        <Tooltip label='delete employee'>
                            <DeleteIcon
                                ml={4}
                                onClick={handleDelete}
                                _hover={{
                                    color: '#0299F5',
                                }} />
                        </Tooltip>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Edit Employee</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text fontSize={"md"} mb={2}>Name</Text>
                                    <Input
                                        textAlign={"center"}
                                        maxW={"660px"}
                                        mb={2}
                                        placeholder='name'
                                        onChange={(e) => setInputValue(e.target.value)}
                                        value={inputValue}
                                         />
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={handleEmployeeUpdate}>Save</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                )
            }
        </>
    )
}

export default EmployeesListItem