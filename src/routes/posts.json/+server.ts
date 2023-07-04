import loadApiPosts from "$lib/server/loadApiPosts";

export const GET = async () => {
    return new Response(JSON.stringify(await loadApiPosts()));
}