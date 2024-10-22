'use client'

import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";


export default function Home() {
  return (
    <Flex bg="whiteAlpha.900" minH="100vh">
      
      <Box flex={1} p={4}>
        <Dashboard />
      </Box>
    </Flex>
  );
}