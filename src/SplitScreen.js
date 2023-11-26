import { constant } from "lodash";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div`
    flex: ${props => props.weight};
`;


export default function SplitScreen({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) {
    console.log('childre', children)
    const [left, right] = children;
    return (
        <Container>
            <Panel weight={leftWeight}>
                {left}
            </Panel>
            <Panel weight={rightWeight}>
                {right}
            </Panel>
        </Container>
    )   
}