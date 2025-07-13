export function getContextTemplate(name: string): string {
  return `import { createContext } from 'react';

export interface ${name}State {
  // Define your context state here
}

export const ${name}Context = createContext<${name}State | undefined>(undefined);
`;
}

export function getContextProviderTemplate(name: string): string {
  return `import { useState, ReactNode } from 'react';
import { ${name}Context, ${name}State } from './${name}Context';

interface ${name}ProviderProps {
  children: ReactNode;
}

export const ${name}Provider = ({ children }: ${name}ProviderProps) => {
  const [state, setState] = useState<${name}State | undefined>(undefined);

  return (
    <${name}Context.Provider value={{ state, setState }}>
      {children}
    </${name}Context.Provider>
  );
};
`;
}

export function getUseContextTemplate(name: string): string {
  return `import { useContext } from 'react';
import { ${name}Context } from './${name}Context';

export const use${name} = () => {
  const context = useContext(${name}Context);
  if (!context) {
    throw new Error('use${name} must be used within a ${name}Provider');
  }
  return context;
};
`;
}

export function getContextIndexTemplate(name: string): string {
  return `export * from './${name}Context';
export * from './${name}Provider';
export * from './use${name}';
`;
}
