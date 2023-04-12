import Avatar from "./Avatar";
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const InfoContainer = styled.div`
  margin-left: 16px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1A1A1A;
  margin-left: 6px;
  margin-bottom: 6px;
`;

const Subtitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #64748B;
  margin-left: 6px;
  margin-bottom: 4px;
`;

const Location = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #64748B;
  margin-left: 6px;
`;

function Profile() {
  return (
    <Container>
      <Avatar />
      <InfoContainer>
        <Title>SPBEAUTY</Title>
        <Subtitle>Салон красоты</Subtitle>
        <Location>Санкт-Петербург, Невский пр-т. 28</Location>
      </InfoContainer>
    </Container>
  );
}

export default Profile;
