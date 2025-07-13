import * as vscode from 'vscode';
import { createComponent } from '../generators/createComponent';
import { createContext } from '../generators/createContext';
import { createGuard } from '../generators/createGuard';
import { createHook } from '../generators/createHook';
import { createService } from '../generators/createService';
import { toPascalCase } from '../utils/stringUtils';

export function registerGenerateFileCommand(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('reactstacktools.generate', async (uri: vscode.Uri) => {
		const options = await vscode.window.showQuickPick(
			[
				{ label: '📦 Generate Component', value: 'component' },
				{ label: '🔧 Generate Hook', value: 'hook' },
				{ label: '🌐 Generate Context', value: 'context' },
				{ label: '🛠️ Generate Service', value: 'service' },
			],
			{ placeHolder: 'Select the type of file to generate' }
		);
		if (!options) {
			return;
		}

		const name = await vscode.window.showInputBox({
			prompt: `Enter the name for the ${options.label}`,
			placeHolder: `e.g. My${options.value}`,
		});
		if (!name) {
			return;
		}

		const pascalName = toPascalCase(name);

		try {
			// ⚠️ Si es componente, usa el generador especializado
			switch (options.value) {
				case 'component': {
					const folderPath = createComponent(pascalName, uri.fsPath);
					if (folderPath) {
						vscode.window.showInformationMessage(`Component "${pascalName}" created at ${folderPath}`);
					}
					break;
				}
				case 'hook': {
					const folderPath = createHook(pascalName, uri.fsPath);
					if (folderPath) {
						vscode.window.showInformationMessage(`Hook "${pascalName}" created at ${folderPath}`);
					}
					break;
				}
				case 'context': {
					const folderPath = createContext(pascalName, uri.fsPath);
					if (folderPath) {
						vscode.window.showInformationMessage(`Context "${pascalName}" created at ${folderPath}`);
					}
					break;
				}
				case 'guard': {
					const folderPath = createGuard(pascalName, uri.fsPath);
					if (folderPath) {
						vscode.window.showInformationMessage(`Guard "${pascalName}" created at ${folderPath}`);
					}
					break;
				}
				case 'service': {
					const folderPath = createService(pascalName, uri.fsPath);
					if (folderPath) {
						vscode.window.showInformationMessage(`Service "${pascalName}" created at ${folderPath}`);
					}
					break;
				}
				default:
					vscode.window.showErrorMessage(`Unknown type: ${options.value}`);
			}
		} catch (err: any) {
			vscode.window.showErrorMessage(`Error: ${err.message}`);
		}
	});

	context.subscriptions.push(disposable);
}
