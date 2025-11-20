import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number', 'email'],
    },
    clearable: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextType: Story = {
  args: {
    type: 'text',
    placeholder: 'Text input',
    value: 'Hello World',
  },
};

export const PasswordType: Story = {
  args: {
    type: 'password',
    placeholder: 'Password input',
    value: 'mysecretpassword',
  },
};

export const NumberType: Story = {
  args: {
    type: 'number',
    placeholder: 'Number input',
    value: '42',
  },
};

export const EmailType: Story = {
  args: {
    type: 'email',
    placeholder: 'Email input',
    value: 'test@example.com',
  },
};

export const WithClearButton: Story = {
  args: {
    placeholder: 'Clearable input...',
    value: 'Sample text',
    clearable: true,
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: 'Disabled input...',
    value: 'Cannot edit this',
    disabled: true,
  },
};

const InteractiveExamplesComponent = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <div>
        <h3>Text Input:</h3>
        <Input 
          type="text"
          value={textValue}
          onChange={setTextValue}
          placeholder="Type something..."
          clearable={true}
        />
        <p>Value: {textValue}</p>
      </div>
      
      <div>
        <h3>Password Input:</h3>
        <Input 
          type="password"
          value={passwordValue}
          onChange={setPasswordValue}
          placeholder="Enter password"
        />
        <p>Value: {passwordValue}</p>
      </div>
      
      <div>
        <h3>Number Input:</h3>
        <Input 
          type="number"
          value={numberValue}
          onChange={setNumberValue}
          placeholder="Enter number"
        />
        <p>Value: {numberValue}</p>
      </div>
    </div>
  );
};

export const InteractiveExamples: Story = {
  render: () => <InteractiveExamplesComponent />,
};