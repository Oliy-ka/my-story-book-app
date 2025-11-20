import React, { useState } from 'react';
import css from './SidebarMenu.module.css';

export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
  onClick?: () => void;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
}

export default function SidebarMenu({ 
  isOpen, 
  onClose, 
  items, 
  title = 'Menu' 
}: SidebarMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderMenuItems = (menuItems: MenuItem[], level = 0) => {
    return menuItems.map(item => (
      <div key={item.id} className={css.menuItemContainer}>
        <div
          className={`${css.menuItem} ${css[`level${level}`]}`}
          onClick={() => {
            if (item.children) {
              toggleItem(item.id);
            } else {
              item.onClick?.();
              onClose();
            }
          }}
        >
          <span className={css.menuLabel}>{item.label}</span>
          {item.children && (
            <span className={`${css.menuArrow} ${expandedItems.has(item.id) ? css.expanded : ''}`}>
              ▶
            </span>
          )}
        </div>
        
        {item.children && expandedItems.has(item.id) && (
          <div className={css.submenu}>
            {renderMenuItems(item.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={css.backdrop} onClick={handleBackdropClick} />
      <div className={css.sidebar}>
        <div className={css.header}>
          <h2 className={css.title}>{title}</h2>
          <button
            onClick={onClose}
            className={css.closeButton}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <div className={css.content}>
          {renderMenuItems(items)}
        </div>
      </div>
    </>
  );
}