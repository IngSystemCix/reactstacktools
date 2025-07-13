export function toPascalCase(str: string): string {
	return str
		.split(/[\s-_]/)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
}
