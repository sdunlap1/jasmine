describe("Testing payment js code Yo!", function () {

    it("should calculate the monthly rate correctly", function () {
      const values = {
        amount: 500000,
        years: 30,
        rate: 7,
      };
      const result = calculateMonthlyPayment(values);
      expect(result).toEqual("3326.51");
    });

    it("should return a result with 2 decimal places", function () {
      const values = { amount: 500000, years: 30, rate: 7.8 };
      const regexTwoDecimals = /^\d+\.\d{2}$/;
      const result = calculateMonthlyPayment(values);
      expect(result).toMatch(regexTwoDecimals);
    });

});
