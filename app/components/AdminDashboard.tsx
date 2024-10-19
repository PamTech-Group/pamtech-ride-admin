'use client'
import { Box, Heading, Text } from "@chakra-ui/react";

const AdminDashboard: React.FC = () => {
  const totalRevenue = 150000; // Replace with actual data

  return (
    <Box bg="#275aff" color="white" p={4} borderRadius="md">
      <Heading size="md" mb={2}>Admin Dashboard</Heading>
      <Text fontSize="xl" fontWeight="bold">
        Total Revenue: ${totalRevenue.toLocaleString()}
      </Text>
    </Box>
  );
};

export default AdminDashboard;