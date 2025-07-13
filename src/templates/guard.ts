export function getGuardTemplate(name: string): string {
	return `import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ${name}Props {
	children: JSX.Element;
	requiredRole?: string;
}

const ${name} = ({ children, requiredRole }: ${name}Props) => {
	const { isAuthenticated, user } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	if (requiredRole && user?.role !== requiredRole) {
		return <Navigate to="/unauthorized" replace />;
	}

	return children;
};

export default ${name};
`;
}

export function getGuardTestTemplate(name: string): string {
    return `import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import ${name} from './${name}';

// Mock useAuth hook
jest.mock('../context/AuthContext', () => ({
    useAuth: jest.fn(),
}));

const mockUseAuth = require('../context/AuthContext').useAuth;

describe('${name}', () => {
    it('renders children if authenticated', () => {
        mockUseAuth.mockReturnValue({
            isAuthenticated: true,
            user: { role: 'user' },
        });

        const { getByText } = render(
            <MemoryRouter>
                <${name}> <div>Protected Content</div> </${name}>
            </MemoryRouter>
        );

        expect(getByText('Protected Content')).toBeInTheDocument();
    });

    it('redirects to /login if not authenticated', () => {
        mockUseAuth.mockReturnValue({
            isAuthenticated: false,
            user: null,
        });

        const { container } = render(
            <MemoryRouter>
                <${name}> <div>Protected Content</div> </${name}>
            </MemoryRouter>
        );

        // You can check for the Navigate component or the absence of children
        expect(container.innerHTML).not.toContain('Protected Content');
    });

    it('redirects to /unauthorized if role does not match', () => {
        mockUseAuth.mockReturnValue({
            isAuthenticated: true,
            user: { role: 'user' },
        });

        const { container } = render(
            <MemoryRouter>
                <${name} requiredRole="admin"> <div>Protected Content</div> </${name}>
            </MemoryRouter>
        );

        expect(container.innerHTML).not.toContain('Protected Content');
    });
});
`;
}
