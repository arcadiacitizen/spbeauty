import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

function Page() {
  return (
    <div className='flex-grow-1'>
      <Header />
      <Container>
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Page;
