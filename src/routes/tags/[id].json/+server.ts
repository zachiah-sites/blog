import loadTag from '$lib/server/loadTag';
import { error } from '@sveltejs/kit';

export const GET = async ({ params }) => {
    try {
        return new Response(JSON.stringify(await loadTag(params.id)));
    } catch {
        return new Response(null, {
            status: 404,
            statusText: 'Tag not found'
        })
    }
};
