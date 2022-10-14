import axios from "axios";
import {
  asyncSumOfArray,
  sumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
} from "../functions";
import { NameApiService } from "../nameApiService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("SumOfArray関数", () => {
  test("要素が1つの配列を渡すと、その値が返る", () => {
    expect(sumOfArray([1])).toBe(1);
  });

  test("要素が複数の配列を渡すと、その合計が返る", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("空の配列を渡すと、例外を投げる", () => {
    expect(() => sumOfArray([])).toThrow();
  });
});

describe("asyncSumOfArray関数", () => {
  test("要素が1つの配列を渡すと、その値が返る", async () => {
    await expect(asyncSumOfArray([1])).resolves.toBe(1);
  });

  test("要素が複数の配列を渡すと、その合計が返る", async () => {
    await expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("空の配列を渡すと、例外となる", async () => {
    await expect(() => sumOfArray([])).toThrow();
  });
});

describe("asyncSumOfArraySometimesZero関数", () => {
  test("データベースに保存できた場合、配列の合計が返る", async () => {
    const databaseMock = { save: jest.fn() };
    await expect(
      asyncSumOfArraySometimesZero([1, 2], databaseMock)
    ).resolves.toBe(3);
    await expect(databaseMock.save).toBeCalledTimes(1);
  });

  test("データベースの保存に失敗した場合、0が返る", async () => {
    const databaseMock = { save: jest.fn() };
    databaseMock.save.mockImplementation(() => {
      throw new Error("fail!");
    });
    await expect(
      asyncSumOfArraySometimesZero([1, 2], databaseMock)
    ).resolves.toBe(0);
    await expect(databaseMock.save).toBeCalledTimes(1);
  });
});

describe("getFirstNameThrowIfLong関数", () => {
  test("取得した名前が引数の数値以下の文字数の場合、その名前が返る", async () => {
    const firstName = { first_name: "Ali" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(
      getFirstNameThrowIfLong(10, new NameApiService())
    ).resolves.toBe("Ali");
  });

  test("取得した名前が引数の数値より大きい場合、例外を投げる", async () => {
    const firstName = { first_name: "Bob" };
    const resp = { data: firstName };
    mockedAxios.get.mockResolvedValue(resp);
    await expect(
      getFirstNameThrowIfLong(2, new NameApiService())
    ).rejects.toThrow("first_name too long");
  });
});
