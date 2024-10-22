import { Table, Thead, Tbody, Tr, Th, Td, Image, Button } from "@chakra-ui/react";
import carPhoto from "../public/hero.png"
interface Car {
  id: string;
//   image: string;
  modelName: string;
  ownerName: string;
  status: string;
}

interface CarTableProps {
    cars: Car[];
  }
// const cars: Car[] = [
//   { id: "1", image: car.src, modelName: "Tesla Model S", ownerName: "John Doe", status: "Available" },
//   { id: "2", image: car.src, modelName: "Ferrari 488", ownerName: "Jane Smith", status: "Rented" },
//   // Add more car data here
// ];
const CarTable: React.FC<CarTableProps> = ({ cars }) => {
      return (
        <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Car Image</Th>
            <Th>Model Name</Th>
            <Th>Owner Name</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cars.map((car) => (
            <Tr key={car.id}>
              <Td>
                
                <Image src={carPhoto.src} alt={car.modelName} boxSize="100px" style={{borderRadius:'1rem', backgroundColor:'white', padding:".2rem"}} objectFit="cover" />
              </Td>
              <Td>{car.modelName}</Td>
              <Td>{car.ownerName}</Td>
              <Td>{car.status}</Td>
              <Td>
                <Button bgColor='primary' color='white' size="sm" colorScheme="blue">
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  );
};

export default CarTable;