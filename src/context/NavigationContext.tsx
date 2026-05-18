import { createContext } from 'react';
import type { NavState } from '../types';

export const NavigationContext = createContext<NavState | null>(null);
