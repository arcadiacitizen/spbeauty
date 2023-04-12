import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: 216px;
        color: #64748B;
        &:hover {
            border: 1px solid #FFFFFF;
            opacity: 80%;
            
        }
        &:active {
            border: 1px solid #FFFFFF;
            opacity: 80%;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;