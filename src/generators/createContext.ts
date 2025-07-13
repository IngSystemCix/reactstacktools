import { getContextIndexTemplate, getContextProviderTemplate, getContextTemplate, getUseContextTemplate } from "../templates/context";
import * as path from 'path';
import * as vscode from 'vscode';
import { toPascalCase } from '../utils/stringUtils';
import * as fs from 'fs';

export function createContext(name: string, targetDir: string): string | undefined {
    const pascalName = toPascalCase(name); // ejemplo: UserContext
    const folderPath = path.join(targetDir, pascalName);

    if (fs.existsSync(folderPath)) {
        vscode.window.showWarningMessage(`Context "${pascalName}" already exists.`);
        return;
    }

    // Crear la carpeta del contexto
    fs.mkdirSync(folderPath);

    // Archivos del contexto
    const files = [
        {
            filename: `${pascalName}Context.ts`,
            content: getContextTemplate(pascalName),
        },
        {
            filename: `${pascalName}Provider.tsx`,
            content: getContextProviderTemplate(pascalName),
        },
        {
            filename: `use${pascalName}.ts`,
            content: getUseContextTemplate(pascalName),
        },
        {
            filename: `index.ts`,
            content: getContextIndexTemplate(pascalName),
        },
    ];

    // Crear los archivos
    files.forEach(file => {
        const filePath = path.join(folderPath, file.filename);
        fs.writeFileSync(filePath, file.content, 'utf-8');
    });

    vscode.window.showInformationMessage(`Context "${pascalName}" created successfully.`);
    return folderPath;
}