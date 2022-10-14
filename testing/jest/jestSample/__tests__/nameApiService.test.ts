import axios from "axios";
import { NameApiService } from "../nameApiService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("", () => {
  test("", async () => {
    const firstName = { first_name: "Rob" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(new NameApiService().getFirstName()).resolves.toBe("Rob");
  });

  test("", async () => {
    const firstName = { first_name: "Anjelica" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(new NameApiService().getFirstName()).rejects.toThrow();
  });
});
