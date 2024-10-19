'use client'
import { Box, Heading, VStack, HStack, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface Booking {
  id: string;
  clientName: string;
  carName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
}

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    { id: "1", clientName: "Alice Johnson", carName: "Luxury Sedan", startDate: "2023-05-01", endDate: "2023-05-03", totalPrice: 600 },
    // Add more booking data
  ]);

  const [selectedDates, setSelectedDates] = useState<{ [key: string]: number }>({
    "2023-05": 200,
    "2023-06": 250,
    "2023-07": 300,
  });

  const handleDatePriceChange = (date: string, price: number) => {
    setSelectedDates({ ...selectedDates, [date]: price });
  };

  const handleCancelBooking = (id: string) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const handleEditBooking = (id: string, field: keyof Booking, value: string | number) => {
    setBookings(bookings.map(booking => booking.id === id ? { ...booking, [field]: value } : booking));
  };

  return (
    <Box >
      <Heading size="md" mb={2}>Booking Management</Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading size="sm" mb={2}>Seasonal Pricing</Heading>
          <HStack flexWrap="wrap">
            {Object.entries(selectedDates).map(([date, price]) => (
              <Box key={date} borderWidth={1} borderRadius="md" p={2}>
                <Text fontSize="sm" mb={4}>{date}</Text>
                <Input
                variant='outline'
                outline='1px solid #275aff'
                _placeholder={{color: 'gray'}}
                borderRadius='15px'
                  size="sm"
                  type="number"
                  value={price}
                  onChange={(e) => handleDatePriceChange(date, Number(e.target.value))}
                />
              </Box>
            ))}
          </HStack>
        </Box>
        <Box>
          <Heading size="sm" mb={2}>Current Bookings</Heading>
          <VStack spacing={2} align="stretch">
            {bookings.map(booking => (
              <Box key={booking.id} borderWidth={1} borderRadius="md" p={2}>
                <Text fontWeight="bold">{booking.clientName} - {booking.carName}</Text>
                <Text fontSize="sm">
                  {booking.startDate} to {booking.endDate}
                </Text>
                <HStack justifyContent="space-between">
                  <Text>${booking.totalPrice}</Text>
                  <HStack>
                    <Button size="xs" colorScheme="blue" onClick={() => handleEditBooking(booking.id, "totalPrice", booking.totalPrice + 100)}>
                      Edit
                    </Button>
                    <Button size="xs" colorScheme="red" onClick={() => handleCancelBooking(booking.id)}>
                      Cancel
                    </Button>
                  </HStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default BookingManagement;