import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';

const AddressWrapper = styled.div`
  border: 1px solid #E2E8F0;
  padding: 24px;
  border-radius: 8px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddressesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function Addresses() {
  return (
    <div className='mt-4'>
      <AddressWrapper>
      <AddressesList>
        <div className='title'>Адреса заведений</div>
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </AddressesList>
        <div>
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
      </AddressWrapper>
    </div>
  );
}

export default Addresses;
