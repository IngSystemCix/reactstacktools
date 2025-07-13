import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { toPascalCase } from '../utils/stringUtils';
import { getGuardTemplate, getGuardTestTemplate } from '../templates/guard';

export function createGuard(name: string, targetDir: string): string | undefined {
	const pascalName = toPascalCase(name); // ejemplo: RequireAuth
	const folderPath = path.join(targetDir, pascalName);

	if (fs.existsSync(folderPath)) {
		vscode.window.showWarningMessage(`Guard "${pascalName}" already exists.`);
		return;
	}

	// Crear la carpeta del guard
	fs.mkdirSync(folderPath);

	// Archivos del guard
	const files = [
		{
			filename: `${pascalName}.tsx`,
			content: getGuardTemplate(pascalName),
		},
		{
			filename: `${pascalName}.test.tsx`,
			content: getGuardTestTemplate(pascalName),
		},
		{
			filename: `index.ts`,
			content: `export { default } from './${pascalName}';`,
		},
	];

	// Crear los archivos
	files.forEach(file => {
		const filePath = path.join(folderPath, file.filename);
		fs.writeFileSync(filePath, file.content, 'utf-8');
	});

	vscode.window.showInformationMessage(`Guard "${pascalName}" created successfully.`);
	return folderPath;
}
