"use client";
import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Checkbox,
  Text,
  useToast,
  SimpleGrid,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  contactDetails: string;
  isAssigned: boolean;
}

export default function DriverManagementPage() {
  const [drivers, setDrivers] = useState<Driver[]>([
    { id: '1', name: 'John Doe', licenseNumber: 'DL12345', contactDetails: '123-456-7890', isAssigned: true },
    { id: '2', name: 'Jane Smith', licenseNumber: 'DL67890', contactDetails: '234-567-8901', isAssigned: false },
    { id: '3', name: 'Mike Johnson', licenseNumber: 'DL24680', contactDetails: '345-678-9012', isAssigned: true },
    { id: '4', name: 'Emily Davis', licenseNumber: 'DL13579', contactDetails: '456-789-0123', isAssigned: false },
    { id: '5', name: 'Chris Brown', licenseNumber: 'DL97531', contactDetails: '567-890-1234', isAssigned: false },
  ]);

  const [newDriver, setNewDriver] = useState({ name: '', licenseNumber: '', contactDetails: '' });
  const toast = useToast();

  const handleCreateDriver = () => {
    if (newDriver.name && newDriver.licenseNumber && newDriver.contactDetails) {
      const driver: Driver = {
        id: Date.now().toString(),
        ...newDriver,
        isAssigned: false,
      };
      setDrivers([...drivers, driver]);
      setNewDriver({ name: '', licenseNumber: '', contactDetails: '' });
      toast({
        title: "Driver created successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please fill all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleAssignUnassign = (driverId: string, assign: boolean) => {
    setDrivers(drivers.map(driver => 
      driver.id === driverId ? { ...driver, isAssigned: assign } : driver
    ));
    toast({
      title: `Driver ${assign ? 'assigned' : 'unassigned'} successfully`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5} bg="white" minH="100vh" color="black">
      <Heading mb={6}>Driver Management Panel</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box border='1px solid #e0e0e0' p={4} borderRadius='6px'>
          <Heading size="md" mb={4}>Driver List</Heading>
          <VStack align="stretch" spacing={4}>
            {drivers.map(driver => (
              <HStack key={driver.id} justify="space-between" p={2} bg="gray.100" borderRadius="md">
                <Checkbox 
                  isChecked={driver.isAssigned}
                  onChange={(e) => handleAssignUnassign(driver.id, e.target.checked)}
                >
                  <Text fontWeight="bold">{driver.name}</Text>
                </Checkbox>
                <HStack>
                  <Button 
                    size="sm" 
                    color='white'
                    bgColor='primary'
                    colorScheme="blue" 
                    onClick={() => handleAssignUnassign(driver.id, true)}
                    isDisabled={driver.isAssigned}
                  >
                    Assign
                  </Button>
                  <Button 
                    size="sm" 
                    colorScheme="red" 
                    onClick={() => handleAssignUnassign(driver.id, false)}
                    isDisabled={!driver.isAssigned}
                  >
                    Unassign
                  </Button>
                </HStack>
              </HStack>
            ))}
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Create New Driver</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Driver Name</FormLabel>
              <Input 
              size="sm"
              outlineColor="#e0e0e0"
              _placeholder={{ color: "gray" }}
                placeholder="Driver Name"
                value={newDriver.name}
                onChange={(e) => setNewDriver({...newDriver, name: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>License Number</FormLabel>
              <Input 
              size="sm"
              outlineColor="#e0e0e0"
              _placeholder={{ color: "gray" }}
                placeholder="License Number"
                value={newDriver.licenseNumber}
                onChange={(e) => setNewDriver({...newDriver, licenseNumber: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact Details</FormLabel>
              <Input 
                placeholder="Contact Details"
                value={newDriver.contactDetails}
                onChange={(e) => setNewDriver({...newDriver, contactDetails: e.target.value})}
              />
            </FormControl>
            <Button color='white' bgColor='primary' colorScheme="blue" onClick={handleCreateDriver}>Create Driver</Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}