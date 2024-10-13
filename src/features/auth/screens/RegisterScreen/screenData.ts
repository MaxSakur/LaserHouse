export interface InputData {
  key: string;
  isRequired: boolean;
  label: string;
  isDisabled?: boolean;
  value: string | Date | undefined;
}

export const registerScreenInputs: InputData[] = [
  {
    label: 'registerScreen.personalData.name',
    isRequired: true,
    key: 'name',
    value: '',
  },
  {
    label: 'registerScreen.personalData.surname',
    isRequired: true,
    key: 'surname',
    value: '',
  },
  {
    label: 'registerScreen.personalData.parentName',
    isRequired: false,
    key: 'parentName',
    value: '',
  },
  {
    label: 'registerScreen.personalData.dob',
    isRequired: false,
    key: 'dob',
    value: undefined,
  },
  {
    label: 'registerScreen.contactData.phone',
    isRequired: true,
    isDisabled: true,
    key: 'phone',
    value: '',
  },
  {
    label: 'registerScreen.contactData.email',
    isRequired: false,
    key: 'email',
    value: '',
  },
];
