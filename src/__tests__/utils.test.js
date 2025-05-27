import { DateFormatter } from "../utils";

test("DateFormatter produces a date string", () => {
    var result = DateFormatter("2025-05-25");
    console.log(result);
    expect(result).toBe("Sun May 25 2025");
})
