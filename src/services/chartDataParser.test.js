import {
  isJson,
  formatJsonFormat,
  chartDataParser,
  checkIfHasInvalidFields
} from "./chartDataParser";

const json = [
  {
    type: "start",
    timestamp: 1519862400000,
    select: ["min_response_time", "max_response_time"],
    group: ["os", "browser"],
  },
  {
    type: "span",
    timestamp: 1519862400000,
    begin: 1519862400000,
    end: 1519862600000,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "linux",
    browser: "chrome",
    min_response_time: 0.1,
    max_response_time: 1.3,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "mac",
    browser: "chrome",
    min_response_time: 0.2,
    max_response_time: 1.2,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "mac",
    browser: "firefox",
    min_response_time: 0.3,
    max_response_time: 1.2,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "linux",
    browser: "firefox",
    min_response_time: 0.1,
    max_response_time: 1.0,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "linux",
    browser: "chrome",
    min_response_time: 0.2,
    max_response_time: 0.9,
  },
  {
    type: "data",
    timestamp: 1519862400000,
    os: "mac",
    browser: "chrome",
    min_response_time: 0.1,
    max_response_time: 1.0,
  },
  {
    type: "data",
    timestamp: 1519862600000,
    os: "mac",
    browser: "firefox",
    min_response_time: 0.2,
    max_response_time: 1.1,
  },
  {
    type: "data",
    timestamp: 1519862600000,
    os: "linux",
    browser: "firefox",
    min_response_time: 0.3,
    max_response_time: 1.4,
  },
  {
    type: "stop",
    timestamp: 1519862600000,
  },
];

const humanJson = `{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862600000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862600000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862600000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862600000}`;


describe("chartDataParser", () => {
  it("Is a invalid valid Json", () => {
    expect(isJson("teste")).toBe(false);
  });

  it("Is a valid Json", () => {
    expect(isJson(json)).toBe(false);
  });

  it("Check if data is empty return a empty array", () => {
    expect.assertions(2)
    expect(chartDataParser(null)).toEqual([]);
    expect(chartDataParser(undefined)).toEqual([]);
  });

  it("Check if the incoming data format is acceptable", () => {
    expect.assertions(3)

    expect(formatJsonFormat(null)).toEqual([]);
    expect(formatJsonFormat(json)).toEqual(json);
    expect(formatJsonFormat(humanJson)).toEqual(json);
  });

  const invalidArray = [
    {
      type: "start",
      timestamp: 1519862400000,
      select: ["min_response_time", "max_response_time"],
      group: ["os", "browser"],
    },
    {
      type: "span",
    }
  ]

  it("Check if has the required Fields", () => {
    expect(checkIfHasInvalidFields(invalidArray)).toEqual(true);
    expect(checkIfHasInvalidFields(json)).toEqual(false);
    expect.assertions(2)
  });

});
