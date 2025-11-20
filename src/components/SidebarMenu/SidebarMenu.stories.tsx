import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SidebarMenu, { MenuItem } from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const sampleItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    id: '2',
    label: 'Settings',
    children: [
      {
        id: '2-1',
        label: 'Account Settings',
        onClick: () => console.log('Account Settings clicked'),
      },
      {
        id: '2-2',
        label: 'Privacy',
        onClick: () => console.log('Privacy clicked'),
      },
    ],
  },
  {
    id: '3',
    label: 'Products',
    children: [
      {
        id: '3-1',
        label: 'All Products',
        onClick: () => console.log('All Products clicked'),
      },
      {
        id: '3-2',
        label: 'Categories',
        children: [
          {
            id: '3-2-1',
            label: 'Electronics',
            onClick: () => console.log('Electronics clicked'),
          },
          {
            id: '3-2-2',
            label: 'Clothing',
            onClick: () => console.log('Clothing clicked'),
          },
          {
            id: '3-2-3',
            label: 'Books',
            onClick: () => console.log('Books clicked'),
          },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'Help & Support',
    onClick: () => console.log('Help clicked'),
  },
];

const DemoComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ padding: '20px', minHeight: '400px' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Open Sidebar Menu
      </button>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={sampleItems}
        title="Main Menu"
      />
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => <DemoComponent />,
};

