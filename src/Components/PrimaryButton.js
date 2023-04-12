import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '216px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border-radius: 24px;
        min-height: 36px;
        min-width: 216px;
        color: white;
        &:hover {
            opacity: 80%;
        }
        &:active {
            background: #0F172A;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;