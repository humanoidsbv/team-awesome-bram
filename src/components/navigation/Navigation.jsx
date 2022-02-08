import * as Styled from './Navigation.styled.js'

export function Navigation() {
    return (
        <Styled.Container>
        <Styled.UnorderList>
            <li><Styled.Link href="/index.html">Timesheets</Styled.Link></li>
            <li><Styled.Link href="team-members.html">Team members</Styled.Link></li>
            <li><Styled.Link href="project.html">Projects</Styled.Link></li>
            <li><Styled.Link href="clients.html">Clients</Styled.Link></li>
            <li><Styled.Link href="documents.html">Documents</Styled.Link></li>
        </Styled.UnorderList>
    </Styled.Container>
    );
}