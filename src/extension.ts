import * as vscode from 'vscode';
import { registerGenerateFileCommand } from './commands/generateFileCommand';

export function activate(context: vscode.ExtensionContext) {
	registerGenerateFileCommand(context);
}

export function deactivate() {}
