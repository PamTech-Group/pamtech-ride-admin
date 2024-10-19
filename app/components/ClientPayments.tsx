'use client'
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface Payment {
  id: string;
  clientName: string;
  amount: number;
  date: string;
}

const ClientPayments: React.FC = () => {
  const payments: Payment[] = [
    { id: "1", clientName: "John Doe", amount: 5000, date: "2023-04-15" },
    { id: "2", clientName: "Jane Smith", amount: 7500, date: "2023-04-16" },
    // Add more payment data
  ];

  return (
    <Box>
      <Heading size="md" mb={2}>Client Payments</Heading>
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Client</Th>
              <Th isNumeric>Amount</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment) => (
              <Tr key={payment.id}>
                <Td>{payment.clientName}</Td>
                <Td isNumeric>${payment.amount.toLocaleString()}</Td>
                <Td>{payment.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default ClientPayments;