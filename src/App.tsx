import React, { useState } from 'react';
import {
  Container,
  Box,
  Heading,
  Input,
  Button,
  Image,
} from '@chakra-ui/react';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

const fetchQRCode = async (text: string): Promise<string> => {
  const response = await fetch('https://qr-code-generator-server.herokuapp.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const mutation: UseMutationResult<string, Error, string> = useMutation<string, Error, string>({
    mutationFn: fetchQRCode,
  });

  const handleGenerate = () => {
    mutation.mutate(text);
  };


  return (
    <Container centerContent>
      <Box p={4} display={{ md: 'flex' }}>
        <Box flexShrink={0}>
          <Heading as="h1" size="xl" my={4}>
            QR Code Generator
          </Heading>
          <Input
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            mb={4}
          />
          <Button colorScheme="teal" onClick={handleGenerate} isLoading={mutation.isPending}>
            Generate QR Code
          </Button>
          {mutation.isSuccess && (
            <Box mt={4}>
              <Image src={mutation.data} alt="Generated QR Code" />
            </Box>
          )}
          {mutation.isError && (
            <Box mt={4} color="red.500">
              An error occurred: {mutation.error.message}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
