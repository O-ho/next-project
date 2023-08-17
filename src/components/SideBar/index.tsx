import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@/constants/mq';

const SideBarContainer = styled.div`
    display: none;
    ${mq[3]} {
        display: flex;
        width: 300px;
        height: 100%;
        background-color: darkgrey;
    }
`;

const SideBar = () => {
    return <SideBarContainer>SideBar</SideBarContainer>;
};

export default SideBar;
