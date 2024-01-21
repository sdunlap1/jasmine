describe("Payments test", function () {
  beforeEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });

  it("should add new payment on submitPaymentInfo()", function () {
    billAmtInput.value = "80";
    tipAmtInput.value = "16";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);

    let payments = Object.keys(allPayments)[0];
    expect(allPayments[payments].billAmt).toEqual("80");
    expect(allPayments[payments].tipAmt).toEqual("16");
  });

  it("should not add a payment when input is empty", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should update payments with appendPaymentTable()", function () {
    let paymentCheck = { billAmt: "80", tipAmt: "16", tipPercent: "20" };

    appendPaymentTable(paymentCheck);
    let newTrow = paymentTbody.children[paymentTbody.children.length - 1];
    expect(newTrow instanceof HTMLTableRowElement).toBe(true);
  });

  it("should not add new payment to createCurPayment", function () {
    let paymentCheck = createCurPayment();
    expect(paymentCheck).toEqual(undefined);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
