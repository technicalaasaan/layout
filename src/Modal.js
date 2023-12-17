import { useState  } from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";


const ModalBackground = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;



export const Modal = ({ children }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}> Show </button>
            {show && (
                <ModalBackground onClick={() => setShow(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <TfiClose style={{'float': 'right'}} onClick={() => setShow(false)} />
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}