import { DateFormatter } from "../utils";

test("DateFormatter produces a date string with valid input", () => {
    var result = DateFormatter("2025-05-25");
    expect(result).toBe("Sun May 25 2025");
})

test('DateFormatter returns message when it cant convert to a date', () => {
    var result = DateFormatter("dsfasdfasdfasdf");
    expect(result).toBe("Invalid Date");
})
