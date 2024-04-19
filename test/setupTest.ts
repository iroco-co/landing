/* eslint-disable @typescript-eslint/no-empty-function */

import { vi } from 'vitest';
import type { Navigation, Page } from '@sveltejs/kit';
import { readable } from 'svelte/store';
import type * as stores from '$app/stores';


// Mock SvelteKit runtime module $app/stores
vi.mock('$app/stores', (): typeof stores => {
    const getStores: typeof stores.getStores = () => {
        const navigating = readable<Navigation | null>(null);
        const page = readable<Page>({
            url: new URL('http://localhost'),
            params: {},
            route: {
                id: null
            },
            status: 200,
            error: null,
            data: {},
            form: undefined,
            state: {}
        });
        const updated = {
            subscribe: readable(false).subscribe,
            check: async (): Promise<boolean> => false
        };

        return { navigating, page, updated };
    };

    const page: typeof stores.page = {
        subscribe(fn) {
            return getStores().page.subscribe(fn);
        }
    };
    const navigating: typeof stores.navigating = {
        subscribe(fn) {
            return getStores().navigating.subscribe(fn);
        }
    };
    const updated: typeof stores.updated = {
        subscribe(fn) {
            return getStores().updated.subscribe(fn);
        },
        check: async () => false
    };

    return {
        getStores,
        navigating,
        page,
        updated
    };
});
