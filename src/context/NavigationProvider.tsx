import { useEffect, useState, type ReactNode } from 'react';
import type { View } from '../types';
import { pathToView, viewToPath } from '../lib/navigation';
import { NavigationContext } from './NavigationContext';

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [view, setView] = useState<View>(() => pathToView(window.location.pathname));

  const navigate = (newView: View) => {
    const path = viewToPath(newView);
    window.history.pushState({ view: newView }, '', path);
    setView(newView);
  };

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.view) {
        setView(event.state.view as View);
      } else {
        setView(pathToView(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ view, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
}
