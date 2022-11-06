import axios from "axios";
import { NameApiService } from "../nameApiService";

// memo: jest.mock(モジュール名)を利用するとモジュールに含まれる各関数にはすでにjest.fn()が設定される
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getFirstName関数", () => {
  test("取得したfirstNameがMAX_LENGTHより短い場合、そのfirstNameが返る", async () => {
    const firstName = { first_name: "Burt" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(new NameApiService().getFirstName()).resolves.toBe("Burt");
  });

  test("取得したfirstNameがMAX_LENGTHより長い場合、例外を投げる", async () => {
    const firstName = { first_name: "Erwin" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(new NameApiService().getFirstName()).rejects.toThrow(
      "firstName is too long!"
    );
  });

  test("firstNameの取得に失敗した場合、例外を投げる", async () => {
    mockedAxios.get.mockImplementation(() => {
      throw Error();
    });
    await expect(new NameApiService().getFirstName()).rejects.toThrow();
  });
});
