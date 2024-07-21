import { fetchQRCode } from "../services/qrCodeService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    blob: () =>
      Promise.resolve(new Blob(["mocked blob content"], { type: "image/png" })),
  })
) as jest.Mock;

describe("fetchQRCode", () => {
  it("should fetch a QR code and return a URL", async () => {
    const url = await fetchQRCode("https://example.com");
    expect(url).toContain("blob:");
  });

  it("should throw an error if the network response is not ok", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    await expect(fetchQRCode("https://example.com")).rejects.toThrow(
      "Network response was not ok"
    );
  });
});
