import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { getServiceTemplate, getServiceTestTemplate } from '../templates/service';
import { toPascalCase } from '../utils/stringUtils';

export function createService(name: string, targetDir: string): string | undefined {
	const pascalName = toPascalCase(name); // e.g. User → UserService
	const folderPath = path.join(targetDir, `${pascalName.toLowerCase()}`);

	if (fs.existsSync(folderPath)) {
		vscode.window.showWarningMessage(`Service "${pascalName}" already exists.`);
		return;
	}

	fs.mkdirSync(folderPath);

	const files = [
		{
			filename: `${pascalName}Service.ts`,
			content: getServiceTemplate(pascalName),
		},
		{
			filename: `${pascalName}Service.test.ts`,
			content: getServiceTestTemplate(pascalName),
		},
		{
			filename: `index.ts`,
			content: `export * from './${pascalName}Service';`,
		},
	];

	files.forEach(file => {
		const filePath = path.join(folderPath, file.filename);
		fs.writeFileSync(filePath, file.content, 'utf8');
	});

	vscode.window.showInformationMessage(`Service "${pascalName}" created successfully.`);
	return folderPath;
}
