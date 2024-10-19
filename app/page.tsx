import { Box, VStack } from "@chakra-ui/react";
import AdminDashboard from "./components/AdminDashboard";
import ClientPayments from "./components/ClientPayments";
import CarManagement from "./components/CarManagement";
import BookingManagement from "./components/BookingManagement";

export default function Home() {
  return (
    <Box bg="white" color="black"   minH="100vh" p={4}>
    <VStack spacing={6} mx='auto' maxW="1440px" align="stretch">
      <AdminDashboard />
      <ClientPayments />
      <CarManagement />
      <BookingManagement />
    </VStack>
  </Box>
  );
}
