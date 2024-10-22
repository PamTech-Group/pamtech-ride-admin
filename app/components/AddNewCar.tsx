import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  Image,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import carPhoto from "../public/hero.png"

interface CarFormData {
  model: string;
  owner: string;
  location: string;
  description: string;
  transmission: string;
  brand: string;
}

const AddNewCarForm: React.FC<{ onSubmit: (data: CarFormData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CarFormData>({
    model: '',
    owner: '',
    location: '',
    description: '',
    transmission: '',
    brand: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <Image
          src={carPhoto.src}
          alt="New Car"
          borderRadius="md"
          objectFit="cover"
          maxH="200px"
        />
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input name="model" value={formData.model} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Owner</FormLabel>
          <Input name="owner" value={formData.owner} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input name="location" value={formData.location} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input name="description" value={formData.description} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Transmission</FormLabel>
          <Input name="transmission" value={formData.transmission} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Brand</FormLabel>
          <Input name="brand" value={formData.brand} onChange={handleChange} />
        </FormControl>
        <Button mt={4} type="submit" colorScheme="blue">Submit</Button>
      </VStack>
    </form>
  );
};

export default AddNewCarForm;