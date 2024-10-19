'use client'
import { Box, Heading, VStack, HStack, Input, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import suv from "../public/hero.png"
interface Car {
  id: string;
  name: string;
  price: number;
  images: string[] ;
}

const CarManagement: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([
    { id: "1", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "2", name: "Prado", price: 250, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "3", name: "Prado", price: 300, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "4", name: "Prado", price: 250, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "5", name: "Prado", price: 600, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "6", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "7", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "8", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "9", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "10", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "11", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "12", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "13", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    { id: "14", name: "Prado", price: 200, images: [suv.src, suv.src, suv.src, suv.src] },
    // Add more car data
  ]);

  const handlePriceChange = (id: string, newPrice: number) => {
    setCars(cars.map(car => car.id === id ? { ...car, price: newPrice } : car));
  };

  const handleImageChange = (id: string, index: number, newUrl: string) => {
    setCars(cars.map(car => {
      if (car.id === id) {
        const newImages = [...car.images];
        newImages[index] = newUrl;
        return { ...car, images: newImages };
      }
      return car;
    }));
  };

  return (
    <Box mx='auto'>
      <Heading size="md" mb={2}>Car Management</Heading>
      <VStack spacing={4} align="stretch" >
        {cars.map(car => (
          <Box key={car.id} borderWidth={1} borderRadius="md" p={2}>
            <Heading mb='1rem' size="sm">{car.name}</Heading>
            <HStack gap='2rem' width='fit-content'>
              <Input
                type="number"
                variant='outline'
                outline='1px solid #275aff'
                borderRadius='15px'
                value={car.price}
                onChange={(e) => handlePriceChange(car.id, Number(e.target.value))}
                placeholder="Price"
                _placeholder={{color: 'gray'}}
              />
              <Button p='1.3rem 2rem' colorScheme="blue" size="sm">Update Price</Button>
            </HStack >
            <HStack mt={2}>
              {car.images.map((url, index) => (
                <VStack spacing='4' key={index}>
                  <Image src={url} alt={`Car image ${index + 1}`} boxSize="150px" style={{borderRadius: '1.5rem'}} objectFit="cover" />
                  <Input
                    size="sm"
                    variant='outline'
                outline='1px solid #275aff'
                borderRadius='15px'
                    placeholder="New image URL"
                    _placeholder={{color: 'gray'}}
                   color='black'
                    onChange={(e) => handleImageChange(car.id, index, e.target.value)}
                  />
                </VStack>
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CarManagement;