import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
import styled from 'styled-components';

const Caption = styled.span`
  font-size: 14px;
  color: #718096;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
`;

function Preferences() {
    return (
        <Container>
            <div>
                <Caption>Название компании</Caption>
                <TitledTextInput def='SPBEAUTY'/>
            </div>
            <div>
                <Caption>Тип организации</Caption>
                <TitledSelector options={[
                    'Салон красоты',
                    'Парикмахерская'
                ]}/>
            </div>
            <div>
                <Caption>Основной телефон для связи</Caption>
                <TitledTextInput def='+7 (912) 345-67-89'/>
            </div>
            <ButtonContainer>
                <PrimaryButton>Сохранить</PrimaryButton>
            </ButtonContainer>
        </Container>
    );
}

export default Preferences;
