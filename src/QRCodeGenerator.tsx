import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Image } from "@chakra-ui/react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import isValidURL from "./utils/isValidURL";
import { fetchQRCode } from "./services/qrCodeService";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState("");
  const mutation: UseMutationResult<string, Error, string> = useMutation<
    string,
    Error,
    string
  >({
    mutationFn: fetchQRCode,
  });

  return (
    <Box>
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
      {error && mutation.data ? (
        <Text fontSize="sm" color="red.500" mb={4}>
          {error}
        </Text>
      ) : null}
      <Button
        colorScheme="teal"
        onClick={() => {
          if (!isValidURL(text)) {
            setError("Please enter a valid URL.");
            return;
          }
          setError("");
          mutation.mutate(text);
        }}
        isLoading={mutation.isPending}
      >
        Generate QR Code
      </Button>
      {mutation.isSuccess && !error && (
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
  );
};

export default QRCodeGenerator;
