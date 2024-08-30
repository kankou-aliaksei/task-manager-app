// @file src/components/DatePickerModal.tsx

import React from 'react';
import Modal from 'react-modal';
import Button from '../Common/Button.styles';
import StyledDatePicker from './DatePickerWrapper';
import { useTheme } from '@emotion/react';
import { hexToRgb } from '../../utils/utils.ts';

Modal.setAppElement('#root');

interface DatePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({
                                                             isOpen,
                                                             onClose,
                                                             selectedDate,
                                                             onDateChange,
                                                         }) => {
    const theme = useTheme();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Select Due Date"
            style={{
                overlay: {
                    backgroundColor: hexToRgb(theme.colors.black, 0.75),
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: theme.spacing.large,
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: theme.colors.darkGray,
                    color: theme.colors.textColor,
                },
            }}
        >
            <StyledDatePicker
                selected={selectedDate}
                onChange={onDateChange}
                inline
            />
            <Button onClick={onClose} type="button" className="mt-4 w-full">
                Close
            </Button>
        </Modal>
    );
};

export default DatePickerModal;
