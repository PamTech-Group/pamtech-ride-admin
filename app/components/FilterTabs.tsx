import { Flex, Button } from "@chakra-ui/react";
import { FiList, FiPlusCircle, FiStar, FiCalendar } from "react-icons/fi";

const FilterTabs: React.FC = () => {
  return (
    <Flex bgColor='white'>
      <Button leftIcon={<FiList />} variant="ghost" colorScheme="blue" mr={2}>
        All
      </Button>
      <Button leftIcon={<FiPlusCircle />} variant="ghost" colorScheme="blue" color='black' mr={2}>
        New
      </Button>
      <Button leftIcon={<FiStar />} colorScheme="blue" color='black'variant="ghost" mr={2}>
        Popular
      </Button>
      <Button leftIcon={<FiCalendar />} colorScheme="blue" color='black' variant="ghost">
        Date Filter
      </Button>
    </Flex>
  );
};

export default FilterTabs;