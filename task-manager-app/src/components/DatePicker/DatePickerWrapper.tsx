// @file src/components/DatePicker/DatePickerWrapper.tsx

import React from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { hexToRgb } from '../../utils/utils.ts';

const DatePickerWrapper = styled.div`
    .react-datepicker {
        background-color: ${({ theme }) => theme.colors.darkGray};
        border: none;
        border-radius: 12px;
        color: #fff;
    }

    .react-datepicker__header {
        background-color: ${({ theme }) => theme.colors.darkGray};
        border-bottom: none;
        padding-top: 10px;
        border-radius: 12px;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
        color: ${({ theme }) => theme.colors.primary};
    }

    .react-datepicker__day,
    .react-datepicker__day-name,
    .react-datepicker__time-name {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.darkGray};
        border-radius: 50%;
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.selectedTextColor};
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--selected,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__year-text--selected {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.selectedTextColor};
    }

    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.selectedTextColor};
    }

    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range {
        background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.5)};
        color: ${({ theme }) => theme.colors.selectedTextColor};
    }

    .react-datepicker__navigation--previous {
        border-right-color: ${({ theme }) => theme.colors.primary};
    }

    .react-datepicker__navigation--next {
        border-left-color: ${({ theme }) => theme.colors.primary};
    }
`;

const StyledDatePicker: React.FC<DatePickerProps> = (props) => {
    return (
        <DatePickerWrapper>
            <DatePicker {...props} />
        </DatePickerWrapper>
    );
};

export default StyledDatePicker;
