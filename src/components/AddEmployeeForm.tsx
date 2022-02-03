import {
  Box,
  Button,
  Input,
  Select,
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const AddEmployeeForm = ({ onClose }: { onClose: any }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [statusValue, setStatusValue] = useState<string>('added')
  const toast = useToast()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'employees'), {
        name: inputValue,
        status: statusValue,
        created: Timestamp.now()
      })
      toast(
        {
          title: `Employee added`,
          status: 'warning',
          duration: 2000,
          isClosable: true,
        }
      )
      setInputValue('')
    } catch (err) {
      alert(err)
    }
    onClose()
  }

  return (
    <Box>
      <Box
        p={8}
        d="flex"
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text fontSize={"md"} mb={2}>Name</Text>
        <Input
          textAlign={"center"}
          maxW={"660px"}
          mb={2}
          placeholder='name'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Text fontSize={"md"} mb={2}>Status</Text>
        <Select onChange={e => setStatusValue(e.target.value)}>
          <option value='added'>Added</option>
          <option value='incheck'>In-Check</option>
          <option value='approved'>Approved</option>
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </Select>
        <Button onClick={handleSubmit} mt={4}>Add employee</Button>
      </Box>
    </Box>
  )
}

export default AddEmployeeForm


