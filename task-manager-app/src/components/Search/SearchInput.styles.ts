// @file src/components/Search/SearchInput.styles.ts

import styled from '@emotion/styled';
import { Input } from '../TaskForm/TaskInput.styles';

export const SearchInput = styled(Input)`
    padding: ${({ theme }) => `${parseInt(theme.spacing.medium) - 2}px ${theme.spacing.medium}`};
    border-color: ${({ theme }) => theme.colors.searchBorderColor};
    &::placeholder {
        opacity: 0.5;
    }
`;
