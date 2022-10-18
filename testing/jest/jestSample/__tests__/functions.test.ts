import {
  asyncSumOfArray,
  sumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
} from "../functions";
import { NameApiService } from "../nameApiService";

describe("SumOfArray関数", () => {
  test("要素が1つの配列を渡すと、その値が返る", () => {
    expect(sumOfArray([1])).toBe(1);
  });

  test("要素が複数の配列を渡すと、その合計が返る", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("空の配列を渡すと、0が返る", () => {
    expect(sumOfArray([])).toBe(0);
  });
});

describe("asyncSumOfArray関数", () => {
  test("要素が1つの配列を渡すと、その値が返る", async () => {
    await expect(asyncSumOfArray([1])).resolves.toBe(1);
  });

  test("要素が複数の配列を渡すと、その合計が返る", async () => {
    await expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
  });

  test("空の配列を渡すと、0が返る", async () => {
    await expect(asyncSumOfArray([])).resolves.toBe(0);
  });
});

// memo: jest.fn()は新しいモック関数を作る関数
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

// memo: jest.spyOnは既存のオブジェクトの特定の関数をモック化する関数
describe("getFirstNameThrowIfLong関数", () => {
  test("取得したfirstNameが引数の数値以下の文字数の場合、その名前が返る", async () => {
    const nameApiServiceMock = new NameApiService();
    jest.spyOn(nameApiServiceMock, "getFirstName").mockResolvedValue("Ali");
    await expect(getFirstNameThrowIfLong(10, nameApiServiceMock)).resolves.toBe(
      "Ali"
    );
  });

  test("取得したfirstNameが引数の数値より大きい場合、例外を投げる", async () => {
    const nameApiServiceMock = new NameApiService();
    jest.spyOn(nameApiServiceMock, "getFirstName").mockResolvedValue("Bob");
    await expect(
      getFirstNameThrowIfLong(2, nameApiServiceMock)
    ).rejects.toThrow("first_name too long");
  });

  test("firstNameの取得に失敗した場合、例外を投げる", async () => {
    const nameApiServiceMock = new NameApiService();
    jest.spyOn(nameApiServiceMock, "getFirstName").mockImplementation(() => {
      throw Error();
    });
    await expect(
      getFirstNameThrowIfLong(2, nameApiServiceMock)
    ).rejects.toThrow();
  });
});
