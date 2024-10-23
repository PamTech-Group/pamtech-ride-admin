'use client'

import React, { useState } from 'react'
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  VStack,
  Button,
  Flex,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

interface LocalGovernment {
  id: string
  areaName: string
  rentalPrice: string
}

interface RentalPrice {
  carModel: string
  monthlyPrice: string
  weeklyPrice: string
  dailyPrice: string
}
interface SpecificMonth {
    month: string
    carType: string
    rentalPrice: number
    localGovernmentArea: string
  }
  
  const specificMonths: SpecificMonth[] = [
    { month: 'January', carType: 'Sedan', rentalPrice: 30000, localGovernmentArea: 'Port Harcourt' },
    { month: 'February', carType: 'SUV', rentalPrice: 40000, localGovernmentArea: 'Uyo' },
    { month: 'March', carType: 'Hatchback', rentalPrice: 25000, localGovernmentArea: 'Calabar' },
  ]
const localGovernments: LocalGovernment[] = [
  { id: '001', areaName: 'Abia', rentalPrice: '₦20,000' },
  { id: '002', areaName: 'Akwa Ibom', rentalPrice: '₦25,000' },
  { id: '003', areaName: 'Cross River', rentalPrice: '₦22,000' },
]

const rentalPrices: RentalPrice[] = [
  { carModel: 'Toyota Camry', monthlyPrice: '$500', weeklyPrice: '$150', dailyPrice: '$50' },
  { carModel: 'Honda Accord', monthlyPrice: '$550', weeklyPrice: '$160', dailyPrice: '$55' },
  { carModel: 'Nissan Altima', monthlyPrice: '$480', weeklyPrice: '$140', dailyPrice: '$45' },
]

export default function PricesPage() {
  const [selectedState, setSelectedState] = useState<string>('')


  const handleUpdate = (id: string) => {
    console.log(`Update clicked for id: ${id}`)
    // Implement update logic here
  }

//   const handleEdit = (carModel: string) => {
//     console.log(`Edit clicked for car model: ${carModel}`)
//     // Implement edit logic here
//   }

//   const handleDelete = (carModel: string) => {
//     console.log(`Delete clicked for car model: ${carModel}`)
//     // Implement delete logic here
//   }

  const handleAdd = () => {
    console.log('Add new rental price clicked')
    // Implement add logic here
  }
  
  const handleSpecificMonthUpdate = (month: string) => {
    console.log(`Update clicked for month: ${month}`)
    // Implement update logic here
  }
  const handleSave = () => {
    console.log('Save clicked for specific months')
    // Implement save logic here
  }
  return (
    <Box p={8} minH='100vh' bg='white' color='black'>
    <Heading mb={6}>Prices</Heading>
    
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading size="md" mb={4}>Local Governments</Heading>
        <Select 
          placeholder="Select State" 
          mb={4}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="abia">Abia</option>
          <option value="akwa-ibom">Akwa Ibom</option>
          <option value="cross-river">Cross River</option>
        </Select>
        
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Local Governments</Th>
                <Th>Area Name</Th>
                <Th>Rental Price</Th>
                <Th>Select State</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {localGovernments.map((lg) => (
                <Tr key={lg.id}>
                  <Td>{lg.id}</Td>
                  <Td>{lg.areaName}</Td>
                  <Td>{lg.rentalPrice}</Td>
                  <Td>
                    <Select placeholder="Dropdown">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Td>
                  <Td>
                    <Button colorScheme="blue" color='white' bgColor='primary' size="sm" onClick={() => handleUpdate(lg.id)}>
                      Update
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Heading size="md" mb={4}>Rental Prices</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Car Model</Th>
                <Th>Monthly Price</Th>
                <Th>Weekly Price</Th>
                <Th>Daily Price</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rentalPrices.map((price, index) => (
                <Tr key={index}>
                  <Td>{price.carModel}</Td>
                  <Td>{price.monthlyPrice}</Td>
                  <Td>{price.weeklyPrice}</Td>
                  <Td>{price.dailyPrice}</Td>
                  <Td>
                    <Flex>
                     
                      <Button colorScheme="blue" color='white' bgColor='primary' size="sm" onClick={() => handleUpdate(price.carModel)}>
                        Update
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent="flex-end" mt={4}>
          <Button leftIcon={<AddIcon />} colorScheme="blue" color='white' bgColor='primary' size="sm" onClick={handleAdd}>
            Add
          </Button>
        </Flex>
      </Box>
      <Box>
          <Heading size="md" mb={4}>Specific Months</Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Month</Th>
                  <Th>Car Type</Th>
                  <Th>Rental Price (₦)</Th>
                  <Th>Local Government Area</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {specificMonths.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.month}</Td>
                    <Td>{item.carType}</Td>
                    <Td>{item.rentalPrice.toLocaleString()}</Td>
                    <Td>{item.localGovernmentArea}</Td>
                    <Td>
                      <Button colorScheme="blue" color='white' bgColor='primary' size="sm" onClick={() => handleSpecificMonthUpdate(item.month)}>
                        Update
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent="flex-end" mt={4}>
            <Button leftIcon={<AddIcon />} colorScheme="blue" color='white' bgColor='primary' size="sm" onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Box>
    </VStack>
  </Box>
  )
}