import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    background-color: white;
    width: 446px;
    color: #0F172A;
    display: inline-flex;
    align-items: center;
    padding: 0px;
`;

const Text = styled.div`
    flex: 1;
    color: #0F172A;
`;

const IconWrapper = styled.div`
    margin-left: 6px;
`;

function ListElement(props) {
    return (
        <Option>
            <Text>{props.children}</Text>
            <IconWrapper>
                <IconOnlyButton icon={<EditIcon />} />
            </IconWrapper>
            <IconWrapper>
                <IconOnlyButton icon={<RemoveIcon />} />
            </IconWrapper>
        </Option>
    );
}

export default ListElement;
