import { NotFoundError } from "../../../errors/not-found-error";
import { getTeamMembers } from "../get-team-members";

const mockedTeamMembers = [
  {
    emailAddress: "test@test.nl",
    employer: "Employer",
    firstName: "Test",
    id: 0,
    label: "No label",
    lastName: "van der Test",
    role: "Tester",
    startingDate: "2022-03-01",
  },
];

const unmockedFetch = global.fetch;

afterAll(() => {
  global.fetch = unmockedFetch;
});

test("if team members are fetched from the database", async () => {
  const mockFetchResponse = Promise.resolve({
    json: () => Promise.resolve(mockedTeamMembers),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = await getTeamMembers();

  expect(response).toEqual(mockedTeamMembers);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`);
});

test("if a notFoundError instance is returned after getting a 404", async () => {
  const mockFetchResponse = Promise.resolve({
    status: 404,
  });
  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = await getTeamMembers();

  expect(response).toBeInstanceOf(NotFoundError);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`);
});
