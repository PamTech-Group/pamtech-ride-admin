'use client'

import { Box, Image, Text, Badge, VStack, HStack } from "@chakra-ui/react";

interface CarCardProps {
  name: string;
  image: string;
  purchasePrice: number;
  rentPrice: number;
  isAvailable: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ name, image, purchasePrice, rentPrice, isAvailable }) => {
  return (
    <Box bg="grayBg" p={4} borderRadius="md" color='black' boxShadow="sm">
      <HStack spacing={4}>
        <Image src={image} alt={name} boxSize="100px" objectFit="cover" borderRadius="md" />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">Purchase Price: ${purchasePrice.toLocaleString()}</Text>
          <Text fontSize="sm" color="gray.500">Rent Price: ${rentPrice}/day</Text>
          <Badge bgColor='white' colorScheme={isAvailable ? "green" : "purple"}>
            {isAvailable ? "Available" : "Rented"}
          </Badge>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CarCard;
