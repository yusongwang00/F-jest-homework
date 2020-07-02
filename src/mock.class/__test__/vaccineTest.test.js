import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => ({
    acceptInjection: mockAcceptInjection,
    getHasAntibodies: mockGetHasAntibodies,
  }));
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  // mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const test = new VaccineTest();
    test.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValueOnce(true);
    const test = new VaccineTest();
    const res = test.test();
    expect(res).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockReturnValueOnce(false);
    const test = new VaccineTest();
    const res = test.test();
    expect(res).toBe("Vaccine Test Failed");
  });
});
