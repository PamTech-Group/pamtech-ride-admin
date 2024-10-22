"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import FinanceCard from "../components/FinanceCard";

interface Expense {
  description: string;
  amount: number;
}

const initialExpenses: Expense[] = [
  { description: "Fuel for Lexus 470  black", amount: 1500 },
  { description: "Airtime", amount: 200 },
  { description: "Securty clearance", amount: 400 },
  { description: "Transportation", amount: 150 },
  { description: "Fuel for Prado 180", amount: 50 },
];

export default function TransactionsPage() {
  const [totalIncome, setTotalIncome] = useState(12500);
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [newExpense, setNewExpense] = useState({ description: "", amount: "" });
  const toast = useToast();

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const balance = totalIncome - totalExpenses;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount) {
      setExpenses([
        ...expenses,
        {
          description: newExpense.description,
          amount: parseFloat(newExpense.amount),
        },
      ]);
      setNewExpense({ description: "", amount: "" });
      toast({
        title: "Expense added.",
        status: "loading",
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} bg="white" minH="100vh" color="black">
      <Heading mb={6}>Income and Expenses Overview</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
        
        <FinanceCard title="Total Income" value={totalIncome} change={3.5} isIncrease={true}/>
        <FinanceCard title="Total Expense" value={totalExpenses} change={3.5} isIncrease={true}/>
        <FinanceCard title="Balance" value={balance} change={3.5} isIncrease={true}/>
      </SimpleGrid>

      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        <Box flex={1}>
          <Heading size="sm" mb={4}>
            Expenses
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses.map((expense, index) => (
                <Tr key={index}>
                  <Td>{expense.description}</Td>
                  <Td isNumeric>${expense.amount.toLocaleString()}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box flex={1}>
          <Heading size="sm" mb={8}>
            Add New Expense
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <Input
                size="sm"
                outlineColor="#e0e0e0"
                _placeholder={{ color: "gray" }}
                placeholder="Expense Description"
                value={newExpense.description}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, description: e.target.value })
                }
              />
              <Input
                size="sm"
                outlineColor="#e0e0e0"
                _placeholder={{ color: "gray" }}
                placeholder="Expense Amount"
                type="number"
                value={newExpense.amount}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, amount: e.target.value })
                }
              />
              <Button type="submit" bgColor='primary' color='white' colorScheme="blue" width="full">
                Add Expense
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}