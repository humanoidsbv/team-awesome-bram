import { client } from "../apollo-client";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container";
import { TeamMembers } from "../src/components/team-members";

import { InitialTeamMembersProps } from "../src/types/Types";
import { GET_TEAM_MEMBERS } from "../src/graphql/team-members";

export const Homepage = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  return (
    <>
      <title>Team members | Team Awesome Bram</title>
      <Header />
      <PageContainer>
        <TeamMembers {...{ initialTeamMembers }} />
      </PageContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TEAM_MEMBERS,
  });

  return {
    props: {
      initialTeamMembers: data.allTeamMembers,
    },
  };
};

export default Homepage;
