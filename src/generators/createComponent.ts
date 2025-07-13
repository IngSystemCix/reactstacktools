import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { toPascalCase } from '../utils/stringUtils';
import { getComponentTemplate, getIndexTemplate, getStylesTemplate, getTestTemplate, getTypesTemplate } from '../templates/component';

export function createComponent(componentName: string, targetDir: string): string | undefined {
	const pascalName = toPascalCase(componentName);
	const componentFolder = path.join(targetDir, pascalName);

	if (fs.existsSync(componentFolder)) {
		vscode.window.showWarningMessage(`Component "${pascalName}" already exists at ${componentFolder}`);
		return;
	}

	// Crear carpeta
	fs.mkdirSync(componentFolder);

	// Archivos a generar
	const files = [
		{
			filename: `${pascalName}.tsx`,
			content: getComponentTemplate(pascalName),
		},
		{
			filename: `${pascalName}.module.css`,
			content: getStylesTemplate(pascalName),
		},
		{
			filename: `${pascalName}.types.ts`,
			content: getTypesTemplate(pascalName),
		},
		{
			filename: `${pascalName}.test.tsx`,
			content: getTestTemplate(pascalName),
		},
		{
			filename: `index.ts`,
			content: getIndexTemplate(pascalName),
		},
	];

	// Crear cada archivo
	files.forEach(file => {
		const filePath = path.join(componentFolder, file.filename);
		fs.writeFileSync(filePath, file.content, 'utf-8');
	});

	vscode.window.showInformationMessage(`Component "${pascalName}" created successfully.`);
	return componentFolder;
}
