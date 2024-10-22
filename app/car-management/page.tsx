"use client";
import {
  Box,
  Flex,
  Heading,
  Button,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import FilterTabs from "../components/FilterTabs";
import CarTable from "../components/CarTable";
import { useState } from "react";
import AddNewCarForm from "../components/AddNewCar";
import carPhoto from "../public/hero.png"

const initialCars = [
  { id: "1", modelName: "Tesla Model S", ownerName: "John Doe", status: "Available", image: "/images/tesla-model-s.jpg" },
  { id: "2", modelName: "Ferrari 488", ownerName: "Jane Smith", status: "Rented", image: "/images/ferrari-488.jpg" },
  { id: "3", modelName: "Range Rover", ownerName: "Michael Johnson", status: "Available", image: "/images/range-rover.jpg" },
  { id: "4", modelName: "Mercedes-Benz S-Class", ownerName: "Emily Brown", status: "Under Maintenance", image: "/images/mercedes-s-class.jpg" },
  { id: "5", modelName: "Porsche 911", ownerName: "David Wilson", status: "Available", image: "/images/porsche-911.jpg" },
  { id: "6", modelName: "BMW X5", ownerName: "Sarah White", status: "Rented", image: "/images/bmw-x5.jpg" },
  { id: "7", modelName: "Audi A8", ownerName: "Kevin Lee", status: "Available", image: "/images/audi-a8.jpg" },
  { id: "8", modelName: "Lamborghini Huracan", ownerName: "Anna Taylor", status: "Rented", image: "/images/lamborghini-huracan.jpg" },
];
// Define the Car type to match your data structure
interface Car {
  id: string;
  modelName: string;
  ownerName: string;
  status: string;
  image: string;
  // Add other properties as needed
}

// Define the CarFormData type to match your AddNewCarForm
interface CarFormData {
  model: string;
  owner: string;
  location: string;
  description: string;
  transmission: string;
  brand: string;
}

export default function CarsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cars, setCars] = useState(initialCars);
  // You'll need to initialize this with your car data

  const handleAddNewCar = (newCarData: CarFormData) => {
    const newCar: Car = {
      id: Date.now().toString(),
      modelName: newCarData.model,
      ownerName: newCarData.owner,
      status: "Available", // Set a default status
      image: carPhoto.src, // Set a default image path
      // Add other properties as needed
    };
    setCars([...cars, newCar]);
    onClose();
  };


  return (
    <Box flex={1} bg="whiteAlpha.900" color="black" minH="100vh" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">Filter and Dataset</Heading>
        <Flex gap={2}>
          <Button size="sm" bgColor="primary" color="white" colorScheme="blue" onClick={onOpen}>
            Add New Car
          </Button>
        </Flex>
      </Flex>
      <VStack spacing={4} align="stretch">
        <FilterTabs />
        <CarTable cars={cars} />
      </VStack>
      <Modal  isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bgColor='blue.700'>
          <ModalHeader>Add New Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewCarForm onSubmit={handleAddNewCar} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
