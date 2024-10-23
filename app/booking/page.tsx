"use client";

import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex,
  IconButton,
  useToast,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  VStack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon, AddIcon } from "@chakra-ui/icons";

interface Booking {
  id: number;
  pricePaid: string;
  clientName: string;
  dateBooked: string;
  phoneNumber: string;
  email: string;
  completed: boolean;
}

const initialBookings: Booking[] = [
  {
    id: 1,
    pricePaid: "$50.00",
    clientName: "John Doe",
    dateBooked: "2023-09-15",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    completed: false,
  },
  {
    id: 2,
    pricePaid: "$75.00",
    clientName: "Jane Smith",
    dateBooked: "2023-09-16",
    phoneNumber: "234-567-8901",
    email: "janesmith@example.com",
    completed: false,
  },
  // Add more booking entries here...
];

export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEdit = (id: number) => {
    // Implement edit functionality
    toast({
      title: "Edit functionality",
      description: `Editing booking with ID: ${id}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCancel = (id: number) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    toast({
      title: "Booking cancelled",
      description: `Booking with ID: ${id} has been cancelled`,
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleComplete = (id: number) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, completed: true } : booking
      )
    );
    toast({
      title: "Booking completed",
      description: `Booking with ID: ${id} has been marked as completed`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const handleAddBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newBooking: Booking = {
      id: bookings.length + 1,
      pricePaid: formData.get('pricePaid') as string,
      clientName: formData.get('clientName') as string,
      dateBooked: formData.get('dateBooked') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      completed: false,
    }
    setBookings([...bookings, newBooking])
    onClose()
    toast({
      title: "Booking added",
      description: `New booking for ${newBooking.clientName} has been added`,
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }
  return (
    <Box p={8} bg="white" color="black" minH="100vh">
       <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading>Bookings</Heading>
        <Button bgColor='primary' color='white' size='sm' leftIcon={<AddIcon />} colorScheme="blue" onClick={onOpen}>
          Add Booking
        </Button>
      </Flex>
      <TableContainer bg="white" borderRadius="md" boxShadow="md">
        <Table variant="simple">
          <Thead bg="gray.50">
            <Tr>
              <Th>Price Paid</Th>
              <Th>{`Client's Name`}</Th>
              <Th>Date Booked</Th>
              <Th>Phone Number</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookings.map((booking) => (
              <Tr
                key={booking.id}
                bg={booking.completed ? "gray.100" : "white"}
              >
                <Td>{booking.pricePaid}</Td>
                <Td>{booking.clientName}</Td>
                <Td>{booking.dateBooked}</Td>
                <Td>{booking.phoneNumber}</Td>
                <Td>{booking.email}</Td>
                <Td>
                  <Flex>
                    <IconButton
                      colorScheme="blue"
                      aria-label="Edit booking"
                      icon={<EditIcon />}
                      size="sm"
                      mr={2}
                      onClick={() => handleEdit(booking.id)}
                    />
                    <IconButton
                      colorScheme="red"
                      aria-label="Cancel booking"
                      icon={<DeleteIcon />}
                      size="sm"
                      mr={2}
                      onClick={() => handleCancel(booking.id)}
                    />
                    <IconButton
                      colorScheme="green"
                      color='white'
                      aria-label="Mark as completed"
                      icon={<CheckIcon />}
                      size="sm"
                      onClick={() => handleComplete(booking.id)}
                      isDisabled={booking.completed}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Booking</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleAddBooking}>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Price Paid</FormLabel>
                  <Input name="pricePaid" placeholder="$0.00" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>{`Client's Name`}</FormLabel>
                  <Input name="clientName" placeholder="John Doe" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Date Booked</FormLabel>
                  <Input name="dateBooked" type="date" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input name="phoneNumber" placeholder="123-456-7890" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input name="email" type="email" placeholder="john@example.com" />
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add Booking
              </Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
