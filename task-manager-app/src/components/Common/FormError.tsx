// @file src/components/Common/FormError.tsx

import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

const ErrorMessage = styled.p`
    color: ${({ theme }: { theme: Theme }) => theme.colors.error};
    font-size: ${({ theme }: { theme: Theme }) => theme.fontSize.small};
    margin-top: 2px;
`;

interface FormErrorProps {
    error?: string;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
    if (!error) return null;
    return <ErrorMessage>{error}</ErrorMessage>;
};

export default FormError;
