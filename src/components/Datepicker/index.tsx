import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {ArrowDown2} from 'iconsax-react-native';
import DatePicker from 'react-native-date-picker';

import Paragraph from '../Paragraph';
import RowSystem from '../RowSystem';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  type: 'date' | 'time' | 'datetime';
  label?: string;
  placeholder?: string;
  selected?: Date;
  onSelect?: (value: Date) => void;
};

function formatDate(date: Date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [day, month, year].join('/');
}

const Datepicker = (props: TProps) => {
  const {type, label, selected, placeholder = '', onSelect} = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [currentDate, setCurrentDate] = React.useState<Date>(
    selected ?? new Date(),
  );

  const onClose = () => setIsOpen(false);

  const handleConfirm = () => {
    onClose();
    onSelect?.(currentDate);
  };

  return (
    <>
      <View>
        {label ? (
          <Paragraph text={label} size={12} style={globalStyles['mb-2']} />
        ) : null}

        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <RowSystem alignItems="center" style={globalStyles.inputContainer}>
            <Paragraph
              style={globalStyles['flex-1']}
              color={selected ? colors.white : colors.gray['150']}
              text={selected ? formatDate(selected) : placeholder}
            />

            <ArrowDown2 size={18} color={colors.gray[150]} />
          </RowSystem>
        </TouchableOpacity>
      </View>

      <Modal visible={isOpen} transparent animationType="fade">
        <View
          style={[
            globalStyles['flex-center'],
            globalStyles['flex-1'],
            {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
          ]}>
          <View style={globalStyles.modal}>
            <DatePicker
              mode={type}
              date={currentDate}
              onDateChange={date => setCurrentDate(date)}
            />

            <TouchableOpacity
              onPress={handleConfirm}
              style={[
                globalStyles.button,
                globalStyles.buttonPrimary,
                globalStyles['px-2'],
              ]}>
              <Paragraph text="Confirm" style={globalStyles['text-center']} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onClose}
              style={[globalStyles.button, globalStyles['px-2']]}>
              <Paragraph
                text="Close"
                style={globalStyles['text-center']}
                color={colors.blue[100]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Datepicker;
