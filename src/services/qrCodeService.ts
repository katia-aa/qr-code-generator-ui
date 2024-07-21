export const fetchQRCode = async (text: string): Promise<string> => {
  const response = await fetch(
    "https://qr-code-generator-p8ou.onrender.com/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
