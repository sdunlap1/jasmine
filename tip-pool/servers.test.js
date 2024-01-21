describe("Servers test (with setup and tear-down)", function () {
  let testServerName;

  beforeEach(function () {
    // initialization logic
    testServerName = "Server Name";
    serverNameInput.value = testServerName;
    allServers = {};
    serverID = 0;
    serverTbody.innerHTML = "";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual(testServerName);
  });

  it("should create a table row and pass to appendTd with input value", function () {
    submitServerInfo({ preventDefault: () => {} });
    expect(serverTbody.children.length).toEqual(1);
    expect(serverTbody.children[0].innerText).toContain(testServerName);
  });

  it("should not add server if no server entered", function () {
    serverNameInput.value = "";
    expect(Object.keys(allServers).length).toEqual(0);
  });
});
describe("updating serverTable", function () {
  it("should update servertable on updateServerTable function", function () {
    allServers = {
      server1: { serverName: "Server 1" },
    };
    serverId = 1;
    updateServerTable();
    expect(serverTbody.children.length).toEqual(1);
    expect(serverTbody.children[0].innerText).toContain("Server 1");
  });

  afterEach(function () {
    serverNameInput.value = "";
    allServers = {};
    serverID = 0;
    serverTbody.innerHTML = "";
  });
});
