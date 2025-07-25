// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import 'unplugin-icons/types/svelte';

declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
