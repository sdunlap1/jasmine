describe("Working through helper.js", function () {
  beforeEach(function (){
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
  });

  it("should sum up all tips", function (){
    billAmtInput.value = "80";
    tipAmtInput.value = "16";
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(16);

    billAmtInput.value = "100";
    tipAmtInput.value = "20";
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(36);
  });

  it("should sum up all bills", function () {
    billAmtInput.value = "80";
    tipAmtInput.value = "16";
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(80);

    billAmtInput.value = "100";
    tipAmtInput.value = "20";
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(180);
  });

  it("should average the tips", function () {
    billAmtInput.value = "100";
    tipAmtInput.value = "20";
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = "80";
    tipAmtInput.value = "40";
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(70);
  });
  
  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });

});