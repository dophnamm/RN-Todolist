import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {CloseCircle, Eye, EyeSlash} from 'iconsax-react-native';

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
  type?: 'text' | 'password';
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
    type = 'text',
    onChange,
  } = props;

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const handleValueChange = (text: string) => {
    onChange?.(text);
  };

  const iconFieldPassword = isShow ? (
    <Eye size={16} color={colors.gray[150]} style={{marginTop: 4}} />
  ) : (
    <EyeSlash size={16} color={colors.gray[150]} style={{marginTop: 4}} />
  );

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
            secureTextEntry={type === 'password' && !isShow ? true : false}
            autoCapitalize="none"
          />

          {suffix ? <View>{suffix}</View> : null}

          {allowClear && type !== 'password' && value ? (
            <TouchableOpacity onPress={() => handleValueChange('')}>
              <CloseCircle
                size={16}
                color={colors.gray[150]}
                style={{marginTop: !multiple ? 4 : 8, marginLeft: 4}}
              />
            </TouchableOpacity>
          ) : null}

          {type === 'password' ? (
            <TouchableOpacity onPress={() => setIsShow(!isShow)}>
              {iconFieldPassword}
            </TouchableOpacity>
          ) : null}
        </View>
      </RowSystem>
    </View>
  );
};

export default Input;
