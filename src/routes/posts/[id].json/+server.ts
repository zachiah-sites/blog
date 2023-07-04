import loadApiPost from '$lib/server/loadApiPost';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
    return json(await loadApiPost(params.id));
};
