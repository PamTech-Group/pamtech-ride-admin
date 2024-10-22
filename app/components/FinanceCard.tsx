'use client'

import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

interface FinanceCardProps {
  title: string;
  value: number;
  change: number;
  isIncrease: boolean;
}

const FinanceCard: React.FC<FinanceCardProps> = ({ title, value, change, isIncrease }) => {
  return (
    <Box bg="white" p={4} borderRadius="md" color='black' boxShadow="sm">
      <Text fontSize="sm" color="gray.500">{title}</Text>
      <Text fontSize="2xl" fontWeight="bold">${value.toLocaleString()}</Text>
      <Flex align="center" color={isIncrease ? "green.500" : "red.500"}>
        <Icon as={isIncrease ? FiArrowUp : FiArrowDown} mr={1} />
        <Text fontSize="sm">{change}% {isIncrease ? "increase" : "decrease"}</Text>
      </Flex>
    </Box>
  );
};

export default FinanceCard;