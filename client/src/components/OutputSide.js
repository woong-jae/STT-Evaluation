import React from 'react';
import styled from 'styled-components';
import OutputCard from './OutputCard';

const OutputSideWrap = styled.div`
    margin-left: 5%;
    width: 70%;
    height: 90%;
    padding: 0 1rem;
    align-self: center;
    overflow-x: auto;
    white-space: nowrap;
`;

const OutputSide = () => {
    return (
        <OutputSideWrap>
            <OutputCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis erat in sollicitudin congue. Curabitur vehicula arcu dolor, eu iaculis diam faucibus et. Fusce tempor sapien nulla, eu rhoncus ex accumsan id. Nulla at massa nec urna finibus vestibulum a in erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc feugiat dapibus posuere. Donec semper tempor felis vel condimentum. Fusce ex dolor, interdum nec maximus id, ullamcorper nec nunc. Curabitur eros velit, imperdiet vitae efficitur gravida, fermentum eget metus. Mauris congue nisi a dolor iaculis, vitae luctus dui finibus.
            </OutputCard>
        </OutputSideWrap>
    );
}

export default OutputSide;