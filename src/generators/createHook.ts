import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { getHookTemplate, getHookTestTemplate } from '../templates/hook';
import { toPascalCase } from '../utils/stringUtils';

export function createHook(name: string, targetDir: string): string | undefined {
	const pascalName = toPascalCase(name); // e.g. Auth → useAuth
	const folderName = `use${pascalName}`;
	const folderPath = path.join(targetDir, folderName);

	if (fs.existsSync(folderPath)) {
		vscode.window.showWarningMessage(`Hook "${folderName}" already exists.`);
		return;
	}

	// Crear carpeta del hook
	fs.mkdirSync(folderPath);

	// Archivos a crear
	const files = [
		{
			filename: `use${pascalName}.ts`,
			content: getHookTemplate(pascalName),
		},
		{
			filename: `use${pascalName}.test.tsx`,
			content: getHookTestTemplate(pascalName),
		},
		{
			filename: `index.ts`,
			content: `export * from './use${pascalName}';`,
		},
	];

	// Crear los archivos
	files.forEach(file => {
		const filePath = path.join(folderPath, file.filename);
		fs.writeFileSync(filePath, file.content, 'utf8');
	});

	vscode.window.showInformationMessage(`Hook "${folderName}" created successfully.`);
	return folderPath;
}
