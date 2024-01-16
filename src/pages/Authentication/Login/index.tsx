import React from 'react';
import {Text} from 'react-native';
import {Lock, Sms} from 'iconsax-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Input from '../../../components/Input';
import Container from '../../../components/Container';
import RowSystem from '../../../components/RowSystem';
import Paragraph from '../../../components/Paragraph';
import Button from '../../../components/Button';
import SectionContainer from '../../../components/SectionContainer';

import {TRootStackParamList} from '../../../routes';

import {colors} from '../../../utils/colors';
import {fontFamily} from '../../../utils/constant';

import {globalStyles} from '../../../styles/globalStyles';

type TProps = {
  navigation: NativeStackNavigationProp<TRootStackParamList, 'Login'>;
};

type TFormLogin = {
  username: string;
  password: string;
};

const Login = (props: TProps) => {
  const {navigation} = props;

  const [formData, setFormData] = React.useState<TFormLogin>({} as TFormLogin);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>();

  React.useEffect(() => {
    if ((formData.username || formData.password) && errors) {
      setErrors('');
    }
  }, [formData]);

  const handleFieldChange = (field: keyof TFormLogin, value?: string) => {
    const values: TFormLogin = {
      ...formData,
      [field]: value,
    };

    setFormData(values);
  };

  const handleSignIn = async () => {
    try {
      if (!formData.username || !formData.password) {
        setErrors('Please enter your username and password');
      } else {
        setIsLoading(true);
        setErrors('');

        await auth().signInWithEmailAndPassword(
          formData.username,
          formData.password,
        );

        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      setErrors(error?.message);
    }
  };

  return (
    <Container
      contentContainerStyle={[
        {
          flexGrow: 1,
        },
        globalStyles.itemsCenter,
        globalStyles.justifyCenter,
      ]}>
      <SectionContainer>
        <Paragraph
          text="LOGIN"
          size={24}
          font={fontFamily.semibold}
          style={globalStyles['text-center']}
        />
      </SectionContainer>

      <SectionContainer>
        <RowSystem
          style={[{flexDirection: 'column', gap: 16}, globalStyles['mb-6']]}>
          <Input
            label="Username/Email"
            placeholder="Enter your username/email"
            value={formData.username}
            onChange={value => handleFieldChange('username', value)}
            allowClear
            prefix={<Sms size={20} color={colors.white} />}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={formData.password}
            onChange={value => handleFieldChange('password', value)}
            prefix={<Lock size={20} color={colors.white} />}
          />

          {errors ? <Paragraph text={errors} color={colors.red[500]} /> : null}
        </RowSystem>
      </SectionContainer>

      <SectionContainer>
        <Button text="Sign in" isLoading={isLoading} onPress={handleSignIn} />
      </SectionContainer>

      <RowSystem style={{gap: 4}} alignItems="center">
        <Text
          style={{
            color: colors.white,
          }}>
          You don't have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={{
            color: colors.blue[100],
          }}>
          Register
        </Text>
      </RowSystem>
    </Container>
  );
};

export default Login;
