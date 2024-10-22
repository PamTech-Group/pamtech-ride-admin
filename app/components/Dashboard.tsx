'use client'

import { Box, Heading, SimpleGrid, Text, VStack, } from "@chakra-ui/react";
import CarCard from "./CarCard";
import FinanceCard from "./FinanceCard";
import prado from "../public/hero.png"

const Dashboard: React.FC = () => {
  return (
    <VStack  spacing={6} align="stretch" color='black'>
      <Heading size="lg">Finances</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <FinanceCard title="Current Value" value={12500} change={3.5} isIncrease={true} />
        <FinanceCard title="Inflow Value" value={8200} change={5} isIncrease={true} />
        <FinanceCard title="Outflow Value" value={7300} change={2} isIncrease={false} />
      </SimpleGrid>
      <Box>
        <Text fontSize="sm" color="gray.500">Financial Trends Over Time</Text>
        {/* Add a chart component here */}
      </Box>
      <Heading size="lg" mt={6}>Rides</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <CarCard
          name="Mercedes-Benz"
          image={prado.src}
          purchasePrice={100000}
          rentPrice={1000}
          isAvailable={true}
        />
        <CarCard
          name="BMW 7 Series"
          image={prado.src}
          purchasePrice={90000}
          rentPrice={900}
          isAvailable={false}
        />
        <CarCard
          name="Audi A8"
          image={prado.src}
          purchasePrice={85000}
          rentPrice={850}
          isAvailable={true}
        />
        <CarCard
          name="Lexus LS"
          image={prado.src}
          purchasePrice={95000}
          rentPrice={950}
          isAvailable={false}
        />
      </SimpleGrid>
    </VStack>
  );
};

export default Dashboard;