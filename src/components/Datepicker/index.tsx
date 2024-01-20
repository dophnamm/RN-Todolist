import React from 'react';
import {Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {ArrowDown2, CloseCircle} from 'iconsax-react-native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';

import Paragraph from '../Paragraph';
import RowSystem from '../RowSystem';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';
import {dateFormat} from '../../utils/constant';

type TProps = {
  type: 'date' | 'time' | 'datetime';
  label?: string;
  placeholder?: string;
  selected?: string | null;
  onSelect?: (value: string | null) => void;
};

const Datepicker = (props: TProps) => {
  const {type, label, selected, placeholder = '', onSelect} = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [currentDate, setCurrentDate] = React.useState<Date>(
    selected ? new Date(selected) : new Date(),
  );

  const onClose = () => setIsOpen(false);

  const handleConfirm = () => {
    onClose();
    onSelect?.(dayjs(currentDate).toISOString());
  };

  const handleClearData = () => {
    setCurrentDate(new Date());
    onSelect?.(null);
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
              text={
                selected
                  ? dayjs(selected).format(dateFormat.COMMON_FORMAT)
                  : placeholder
              }
            />

            {selected ? (
              <TouchableOpacity onPress={handleClearData}>
                <CloseCircle size={16} color={colors.gray[150]} />
              </TouchableOpacity>
            ) : (
              <ArrowDown2 size={18} color={colors.gray[150]} />
            )}
          </RowSystem>
        </TouchableOpacity>
      </View>

      <Modal visible={isOpen} transparent animationType="fade">
        <SafeAreaView style={globalStyles['flex-1']}>
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
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Datepicker;
