// @file src/components/MainContent.tsx

import React from 'react';
import styled from '@emotion/styled';
import Dashboard from './Dashboard';
import Header from './Header';

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
`;

const MainContent: React.FC = () => {
    return (
        <MainContainer>
            <Header />
            <Dashboard />
        </MainContainer>
    );
};

export default MainContent;
