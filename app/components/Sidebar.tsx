'use client'
import { VStack, Text, Icon, Flex, Avatar, Box, Link,  } from "@chakra-ui/react";
import { FiHome, FiDollarSign, FiPieChart, FiSettings } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Image } from "@chakra-ui/next-js";
import logo from "../public/pamtech_logo_blue.webp"

interface NavItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        align="center"
        p={2}
        borderRadius="md"
        color={isActive ? "#275aff" : "gray.700"}
        bg={isActive ? "blue.50" : "transparent"}
        _hover={{ bg: "blue.50" }}
      >
        <Icon as={icon} mr={2} />
        <Text>{children}</Text>
      </Flex>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  return (
    <VStack bg="white" w="250px" h="100vh" position='fixed' 
    top={0} 
    left={0} p={4} spacing={6} align="stretch"  overflowY="auto" borderRight='2px solid #f0f0f0'>
     <Box >

      <Image src={logo} alt="logo" height={45} width={180}  />
<Box mt={4} bgColor='grayBg' height='2px' width='100%'/>
     </Box>

      <VStack spacing={4} align="stretch">
        <NavItem icon={FiHome} href="/">Dashboard</NavItem>
        <NavItem icon={FiDollarSign} href="/transactions">Transactions</NavItem>
        <NavItem icon={FiPieChart} href="/car-management">Car Management</NavItem>
        <NavItem icon={FiSettings} href="/drivers">Drivers Management</NavItem>
        <NavItem icon={FiSettings} href="/booking">Bookings</NavItem>
        <NavItem icon={FiSettings} href="/prices">Update Prices</NavItem>

      </VStack>
      <Flex flexDirection='column' gap={4} alignItems='left' mt="auto" color='black'>
        <Flex align="center" justifyContent='left'>
          <Avatar size="sm" name="Amanda" src="https://bit.ly/broken-link" mr={2} />
          <Box>
            <Text fontWeight="bold">Admin</Text>
           
          </Box>
        </Flex>
        <Flex align="center" ml={1}>
          <Icon as={FiSettings} mr={2} />
          <Text>Logout</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Sidebar;