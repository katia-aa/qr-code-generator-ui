import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import isValidURL from "./utils/isValidURL";

const DynamicQRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [error, setError] = useState<string>("");
  const mutation: UseMutationResult<
    string,
    Error,
    { url: string; description: string; expirationDate: string }
  > = useMutation<
    string,
    Error,
    { url: string; description: string; expirationDate: string }
  >({
    // mutationFn: void
  });

  const handleGenerate = () => {
    if (!isValidURL(text)) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    mutation.mutate({ url: text, description, expirationDate });
  };

  return (
    <Box>
      <Heading as="h1" size="xl" my={4}>
        Dynamic QR Code Generator
      </Heading>
      <Text fontSize="md" mb={4}>
        This tool generates a dynamic QR code from the URL and additional data
        you enter.
      </Text>

      <UnorderedList>
        <ListItem>
          Generate dynamic QR codes that can be edited and tracked.
        </ListItem>
        <ListItem>Log scan events to provide analytics.</ListItem>
        <ListItem>Display scan data through an API endpoint.</ListItem>
      </UnorderedList>
      <Box paddingY={5}>
        <Input
          placeholder="Enter URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          mb={4}
        />
        <Input
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={4}
        />
        <Input
          placeholder="Enter Expiration Date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          mb={4}
          type="date"
        />
        {error && mutation.data ? (
          <Text fontSize="sm" color="red.500" mb={4}>
            {error}
          </Text>
        ) : null}
        <Button
          colorScheme="teal"
          onClick={handleGenerate}
          isLoading={mutation.isPending}
        >
          Generate Dynamic QR Code
        </Button>
        {/* {mutation.isSuccess && (
        <Box mt={4}>
          <Image src={mutation.data} alt="Generated Dynamic QR Code" />
        </Box>
      )} */}
        {mutation.isError && (
          <Box mt={4} color="red.500">
            An error occurred: {mutation.error.message}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DynamicQRCodeGenerator;
