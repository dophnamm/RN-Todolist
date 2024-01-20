import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowDown2, CloseCircle, TickSquare} from 'iconsax-react-native';

import Paragraph from '../Paragraph';
import RowSystem from '../RowSystem';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';

export type TDropdownItem = {
  label: string;
  value: string;
};

type TProps = {
  label?: string;
  items: TDropdownItem[];
  selected?: string[];
  multiple?: boolean;
  placeholder?: string;
  onSelect: (values: string[]) => void;
};

const Dropdown = (props: TProps) => {
  const {label, items, selected = [], placeholder, multiple, onSelect} = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [itemsSelected, setItemsSelected] = React.useState<string[]>(selected);

  const handleSelected = (value: string) => {
    const isExisting = itemsSelected.includes(value);

    if (isExisting) {
      const values = itemsSelected.filter(item => item !== value);
      setItemsSelected(values);
      return;
    }

    if (multiple) {
      const values = [...itemsSelected, value];
      setItemsSelected(values);
    } else {
      setItemsSelected([value]);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    onSelect(itemsSelected);
    handleCancel();
  };

  const handleClearData = () => {
    setItemsSelected([]);
    onSelect([]);
  };

  return (
    <View>
      <RowSystem style={[{flexDirection: 'column', gap: 8}]}>
        {label ? <Paragraph text={label} size={12} /> : null}

        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <RowSystem
            style={[globalStyles.inputContainer]}
            justifyContent="space-between">
            <Paragraph
              text={placeholder ? placeholder : 'Choice'}
              color={selected.length ? colors.white : colors.gray[150]}
              numberOfLine={1}
              style={{width: '92%'}}
            />

            {selected.length ? (
              <TouchableOpacity onPress={handleClearData}>
                <CloseCircle size={16} color={colors.gray[150]} />
              </TouchableOpacity>
            ) : (
              <ArrowDown2 size={18} color={colors.gray[150]} />
            )}
          </RowSystem>
        </TouchableOpacity>
      </RowSystem>

      <Modal visible={isOpen} animationType="fade" statusBarTranslucent>
        <SafeAreaView style={globalStyles['flex-1']}>
          <View
            style={[
              globalStyles['flex-1'],
              globalStyles['px-6'],
              {backgroundColor: colors.black[100]},
            ]}>
            <FlatList
              data={items}
              renderItem={({item}) => {
                const isActive = itemsSelected.includes(item.value);

                return (
                  <TouchableOpacity
                    key={item.value}
                    onPress={() => handleSelected(item.value)}
                    style={[
                      globalStyles['my-2'],
                      globalStyles['py-2'],
                      globalStyles['px-2'],
                      {
                        backgroundColor: !isActive
                          ? colors.purple[100]
                          : colors.aqua[50],
                        borderRadius: 8,
                      },
                    ]}>
                    <RowSystem
                      justifyContent="space-between"
                      alignItems="center">
                      <Paragraph
                        text={item.label}
                        color={isActive ? colors.aqua[700] : undefined}
                      />

                      {isActive ? (
                        <TickSquare size={18} color={colors.aqua[700]} />
                      ) : null}
                    </RowSystem>
                  </TouchableOpacity>
                );
              }}
            />

            <RowSystem style={{flexDirection: 'column', gap: 24}}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[globalStyles.button, globalStyles.buttonPrimary]}>
                <Paragraph
                  text="Confirm"
                  style={[globalStyles['text-center']]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleCancel}
                style={[globalStyles['mb-6']]}>
                <Paragraph
                  text="Close"
                  color={colors.blue[100]}
                  style={[globalStyles['text-center']]}
                />
              </TouchableOpacity>
            </RowSystem>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default Dropdown;
