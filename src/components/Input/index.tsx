import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {CloseCircle} from 'iconsax-react-native';

import Paragraph from '../Paragraph';
import RowSystem from '../RowSystem';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  multiple?: boolean;
  numberOfLine?: number;
  onChange?: (value: string) => void;
};

const Input = (props: TProps) => {
  const {
    label,
    value,
    placeholder,
    prefix,
    suffix,
    allowClear = false,
    multiple,
    numberOfLine,
    onChange,
  } = props;

  const handleValueChange = (text: string) => {
    onChange?.(text);
  };

  return (
    <View>
      {label ? (
        <Paragraph text={label} size={12} style={globalStyles['mb-2']} />
      ) : null}

      <RowSystem>
        <View
          style={[
            globalStyles['flex-1'],
            globalStyles.inputContainer,
            globalStyles.justifyStart,
            {
              gap: prefix || suffix ? 8 : 0,
              minHeight: multiple && numberOfLine ? numberOfLine * 32 : 'auto',
            },
          ]}>
          {prefix ? <View>{prefix}</View> : null}

          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleValueChange}
            style={[globalStyles.text, globalStyles['flex-1']]}
            placeholderTextColor={colors.gray[150]}
            autoComplete="off"
            multiline={multiple}
            numberOfLines={numberOfLine}
          />

          {suffix ? <View>{suffix}</View> : null}

          {allowClear && value ? (
            <TouchableOpacity onPress={() => handleValueChange('')}>
              <CloseCircle size="16" color={colors.white} />
            </TouchableOpacity>
          ) : null}
        </View>
      </RowSystem>
    </View>
  );
};

export default Input;
