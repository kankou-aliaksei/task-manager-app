// @file src/components/Common/Label.styles.ts

import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

export const Label = styled.label`
    display: block;
    font-size: ${({ theme }: { theme: Theme }) => theme.fontSize.small};
    font-weight: 500;
    color: ${({ theme }: { theme: Theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.small};
`;
