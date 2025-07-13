export function getComponentTemplate(name: string): string {
    return `import './${name}.module.css';
    
export const ${name} = () => {
    return (
        <div>
            <h1>${name} Component</h1>
        </div>
    );
};
`;
}

export function getTestTemplate(name: string): string {
    return `import { render } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
    it('renders without crashing', () => {
        render(<${name} />);
    });
});
`;
}

export function getStylesTemplate(name: string): string {
    return `/* Styles for ${name} */
`;
}

export function getTypesTemplate(name: string): string {
    return `export interface ${name}Props {
    // define props here
}
`;
}

export function getIndexTemplate(name: string): string {
    return `export * from './${name}.tsx';
    export * from './${name}.types';
`;
}