import loadApiPost from '$lib/server/loadApiPost';

export const GET = async ({ params }) => {
	return new Response(JSON.stringify(await loadApiPost(params.id)));
};
