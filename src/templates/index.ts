import { getComponentTemplate } from "./component";
import { getContextTemplate } from "./context";
import { getGuardTemplate } from "./guard";
import { getHookTemplate } from "./hook";
import { getServiceTemplate } from "./service";

export function getTemplate(type: string, name: string): string | undefined {
	switch (type) {
		case 'component': return getComponentTemplate(name);
		case 'hook': return getHookTemplate(name);
		case 'context': return getContextTemplate(name);
		case 'service': return getServiceTemplate(name);
		case 'guard': return getGuardTemplate(name);
		default: return undefined;
	}
}
