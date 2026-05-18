import { useContext } from 'react';
import type { NavState } from '../types';
import { NavigationContext } from '../context/NavigationContext';

export function useNavigation(): NavState {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
