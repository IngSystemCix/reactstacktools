export function getHookTemplate(name: string): string {
    return `import { useState, useEffect } from 'react';

export const use${name} = () => {
    const [state, setState] = useState<${name}State | null>(null);

    useEffect(() => {
        // Fetch or compute initial state here
        setState(initialState);
    }, []);

    return state;
};
`;
}

export function getHookTestTemplate(name: string): string {
    return `import { renderHook } from '@testing-library/react';
import { use${name} } from './use${name}';
import { ${name}State } from './${name}Context';

describe('use${name}', () => {
    it('should initialize state correctly', () => {
        const { result } = renderHook(() => use${name}());
        expect(result.current).toBeNull(); // Adjust based on initial state
    });

    // Add more tests as needed
});
`;
}