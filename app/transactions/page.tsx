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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

interface Transaction {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

const initialTransactions: Transaction[] = [
  { description: "Online Payment", amount: 5000, type: 'income' },
  { description: "Rent", amount: 1500, type: 'expense' },
  { description: "Utilities", amount: 200, type: 'expense' },
  { description: "Cash Payment", amount: 7500, type: 'income' },
  { description: "Groceries", amount: 400, type: 'expense' },
  { description: "Transportation", amount: 150, type: 'expense' },
  { description: "Internet", amount: 50, type: 'expense' },
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({ description: "", amount: "", type: 'expense' as 'income' | 'expense' });
  const toast = useToast();

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTransaction.description && newTransaction.amount) {
      setTransactions([
        ...transactions,
        {
          description: newTransaction.description,
          amount: parseFloat(newTransaction.amount),
          type: newTransaction.type,
        },
      ]);
      setNewTransaction({ description: "", amount: "", type: 'expense' });
      toast({
        title: `${newTransaction.type === 'income' ? 'Income' : 'Expense'} added.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} bg="white" minH="100vh" color="black">
      <Heading mb={6}>Income and Expenses Overview</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
        <Box bg="#f0f0f0" p={5} borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Total Income</Text>
          <Text fontSize="3xl" color="green.500">${totalIncome.toLocaleString()}</Text>
        </Box>
        <Box bg="#f0f0f0" p={5} borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Total Expenses</Text>
          <Text fontSize="3xl" color="red.500">${totalExpenses.toLocaleString()}</Text>
        </Box>
        <Box bg="#f0f0f0" p={5} borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Balance</Text>
          <Text fontSize="3xl" color={balance >= 0 ? "green.500" : "red.500"}>${balance.toLocaleString()}</Text>
        </Box>
      </SimpleGrid>

      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        <Box flex={1}>
          <Heading size="md" mb={4}>Transactions</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction, index) => (
                <Tr key={index}>
                  <Td>{transaction.description}</Td>
                  <Td>{transaction.type}</Td>
                  <Td isNumeric color={transaction.type === 'income' ? "green.500" : "red.500"}>
                    ${transaction.amount.toLocaleString()}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box flex={1}>
          <Heading size="md" mb={4}>Add New Transaction</Heading>
          <Tabs>
            <TabList>
              <Tab>Income</Tab>
              <Tab>Expense</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <Input
                      size="sm"
                      outlineColor="#e0e0e0"
                      _placeholder={{ color: "gray" }}
                      placeholder="Income Description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value, type: 'income' })}
                    />
                    <Input
                      size="sm"
                      outlineColor="#e0e0e0"
                      _placeholder={{ color: "gray" }}
                      placeholder="Income Amount"
                      type="number"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value, type: 'income' })}
                    />
                    <Button  type="submit" fontSize='sm' colorScheme="blue" bgColor='primary' color='white' width="full">
                      Add Income
                    </Button>
                  </VStack>
                </form>
              </TabPanel>
              <TabPanel>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <Input
                      size="sm"
                      outlineColor="#e0e0e0"
                      _placeholder={{ color: "gray" }}
                      placeholder="Expense Description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value, type: 'expense' })}
                    />
                    <Input
                      size="sm"
                      outlineColor="#e0e0e0"
                      _placeholder={{ color: "gray" }}
                      placeholder="Expense Amount"
                      type="number"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value, type: 'expense' })}
                    />
                    <Button type="submit" bgColor='red.500' colorScheme="red" color='white' width="full">
                      Add Expense
                    </Button>
                  </VStack>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}