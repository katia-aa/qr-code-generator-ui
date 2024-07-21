import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Input,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { fetchQRCode } from "./services/qrCodeService";
import isValidURL from "./utils/isValidURL";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState("");
  const mutation: UseMutationResult<string, Error, string> = useMutation<
    string,
    Error,
    string
  >({
    mutationFn: fetchQRCode,
  });

  const handleGenerate = () => {
    if (!isValidURL(text)) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    mutation.mutate(text);
  };

  return (
    <Container centerContent>
      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Heading as="h1" size="xl" my={4}>
            QR Code Generator
          </Heading>
          <Text fontSize="md" mb={4}>
            This tool generates a static QR code from the URL you enter.
          </Text>
          <Input
            placeholder="Enter URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
            mb={4}
          />
          {error && (
            <Text fontSize="sm" color="red.500" mb={4}>
              {error}
            </Text>
          )}
          <Button
            colorScheme="teal"
            onClick={handleGenerate}
            isLoading={mutation.isPending}
          >
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
