import { client } from "../apollo-client";

import { GET_DATA } from "../src/graphql/time-entries";
import { TimeEntriesProps } from "../src/types/Types";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

export const Homepage = ({ initialTimeEntries, clients }: TimeEntriesProps) => {
  return (
    <>
      <title>Time entries | Team Awesome Bram</title>
      <Header />
      <PageContainer>
        <TimeEntries {...{ initialTimeEntries, clients }} />
      </PageContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_DATA,
  });

  return {
    props: {
      clients: data.allClients,
      initialTimeEntries: data.allTimeEntries,
    },
  };
};

export default Homepage;
