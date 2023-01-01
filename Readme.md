a tool for running our tests and asserting the results :JEst
A tool for simulating (rendering) our react app/componenets: RTL

# steps

1. Arrange: Set up test data, test conditions and test enviornment
2. Act: Run the logic that should be tested(eg, execute function)
3. Assert:Compare execution results with the expected results

//react hook testing library extension

# Unit testing

A unit is ideally the smallest building block of your app
If all units are individually tested the overall app should work
Changes are always tested against all units to avoid bugs

- automated testing avoids endless amounts of manual testing
- Allows you to cover close to 100% of your code
- Code changes are tested against all scenarios instantly
- Write cleaner & better code

if all building blocks work, the overall app works

# jest && vitest

# Integration Testing

- Test the combination of building blocks
- Verify if building blocks work together
- Even if all units work standalone, the comnination could fail

# E2E testing

- test entire flows and application features
- test the actual things users would do
- Real users use your app and its features, not individual units

# test driven development

A framework or philosophy where you write failing test first
then implement the code to make it succeed and refactor the code

Automated tests require a test runner(which runs the testing code) and an assertion library(is used to define outcomes)

# Arrange, Act and Assert

- while testing not just valid values but invalid cases also
- your test should only test your code,dont test third party packgages or libraries or frameworks or code or features, browser APIs , native nodejs packages
- follow AAA pattern while writing tests
- a test should test only one thing(one feature or one behaviour) per test
- test should focus on the essence of what you are testing
- keep expect statements low for each test
- An important aspect of testing is to achieve good code coverage. This means, that you want to write tests for the majority of your code (both code files and line of code).
  There are tools that help you measure your code coverage - actually Vitest comes with a built-in functionality: https://vitest.dev/guide/features.html#coverage

It is worth noting though, that the goal is not necessarily 100% coverage. There always can be some code that doesn't need any tests (e.g., because it merely calls other functions that are tested already).

In addition, achieving (close to) full code coverage also isn't any guarantee that you wrote good tests. You could cover 100% of your code with meaningless tests after all. Or you could missing important tests (that should test important behaviors). The code would still technically be covered by tests in such scenarios.

# Integration Tests

# toBe vs toEqual

- toBe checks for exact equality so refernce types like arrays and objects fail
- toEqual simply goes through the value, and does a deep comparison of that value

# Async code while testing

you need to add your own try catch block
inside of your test code
and you wanna try this assertion.
And if it fails,
so if your expectation was not met
then you want to call done
and forward the error you caught.
Otherwise you want to call done without any arguments.

- You don't need to return when using async / await (since a function annotated with async returns a promise implicitly)., without async await you need to use
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });
  This guarantees that Vitest / Jest wait for the promise to be resolved.

# testing hooks

- beforeAll()
- beforeEach()
- afterEach()
- afterAll()

# Spies

Wrappers around functions or empty replacement for functions that allow you to track if and how the function was called
vi for spies in vitest

jest for spies in jest
used where we can replace a function with an empty function and just find out whether it was called.
eg: jest.fn()
spies.toBeCalledWith
toBeCalledTimes

# Mocks

A replacement for an API that may provide some test specific behaviour instead
With mocks, we can easily replace functionalities that are defined in modules.
No matter if we own them or not. To do that, all we have to do is import vi , or jest-js and then on this vi or jest object we have the mock method.
eg: vi.mock('fs')
the above example with start Vitests or Jest's auto-mocking algorithm ie It will basically find this module and replace all the fs functions in there
with empty spy functions.
mock funciton should be hoisted at the top of file before any imports

- custom mocking logic-
  eg:
  vi.fn(()=>{})
  The idea behind mocks is to replace functions / functionality that might be used by your code but shouldn't be triggered by your tests. Or, to be precise: It should be triggered but it shouldn't do what it normally does (e.g., it might normally send a Http request => That should typically be prevented during tests).
  The mock() method makes it easy to define and use replacement functions that can be called but don't do anything therefore
  Manual mocks are defined by writing a module in a **mocks**/ subdirectory immediately adjacent to the module

- mocking a fetch request
  you wanna avoid that a real request is sent because if a real request is sent to the backend, and especially if it's something like a post request, then something might changed in a database on some other server out there in the world. And you typically don't want your tests
  to change something permanently.
  So therefore often you don't wanna send real requests also because this will slow down your tests and it might take a bandwidth if you have a lot of tests and they all send different requests,
  it might also start hammering your backend API with all your tests,
  because you have all those extra unnecessary requests reaching the backend API.

  # Mocking Global values like fetch

  -vi.stubGlobal()
  instead of a global value, you can mock that library as you learned in the previous section (i.e., use vi.mock('axios'), provide a **mocks**/axios.js file if necessary etc.).

  similarly in jest
  // beforeAll
  jest
  .spyOn(window, 'navigator', 'get')
  .mockImplementation(() => { ... })

// afterAll
jest.restoreAllMocks();
https://stackoverflow.com/questions/40449434/mocking-globals-in-jest

# mockImplementation() in jest

we can set an implementation
for our mock function that's used only once.

# Use different Testing environments

- node js(default)- nodejs APIs & modules are available
- can't interact with browser & browser APIs

- JSDOM, Happy-DOM(only vitest)
  virual browser environment with browser APIs & the DOM
  virtually emulated dom without any actul html
  ideal for testing frontend code & projects
  -with JSDOM You still have all these Node APIs available fs, pathinside of your test files. So you can still use all that Node JS code
  in your test files because the Dom is only emulated virtually. It's still not really running in a browser.It's just emulated.
  -We can create a window object by instantiating window from jestdom or happy dom. And this now basically creates an emulated browser
  so to say, but a browser with a page loaded
  that we can configure and we can then get the document
  by accessing window.document.
  So into this emulated browser and this in the end
  now renders this page virtually.

# testing library

# React testing libray
