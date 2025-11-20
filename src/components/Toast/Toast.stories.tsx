import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toast from './Toast';
import ToastContainer, { ToastItem, ToastType } from './ToastContainer';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: {
      control: { type: 'number' },
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 5000,
    closable: true,
    onClose: () => console.log('Toast closed'),
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'An error occurred while processing your request.',
    type: 'error',
    duration: 5000,
    onClose: () => console.log('Toast closed'),
  },
};

export const WarningToast: Story = {
  args: {
    message: 'Please check your input data.',
    type: 'warning',
    duration: 3000,
    onClose: () => console.log('Toast closed'),
  },
};

export const InfoToast: Story = {
  args: {
    message: 'New update available for your application.',
    type: 'info',
    duration: 4000,
    onClose: () => console.log('Toast closed'),
  },
};

export const WithoutAutoClose: Story = {
  args: {
    message: 'This toast requires manual closing.',
    type: 'info',
    duration: 0,
    closable: true,
    onClose: () => console.log('Toast closed'),
  },
};

export const ToastDemo = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (message: string, type: ToastType, duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button onClick={() => addToast('Success message!', 'success')}>
          Show Success
        </button>
        <button onClick={() => addToast('Error message!', 'error')}>
          Show Error
        </button>
        <button onClick={() => addToast('Warning message!', 'warning')}>
          Show Warning
        </button>
        <button onClick={() => addToast('Info message!', 'info')}>
          Show Info
        </button>
        <button onClick={() => addToast('Manual close only!', 'info', 0)}>
          No Auto-Close
        </button>
      </div>
      
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

