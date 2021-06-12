import type { SvelteComponent } from 'svelte';

export async function getPostData(postid: string) {
	const post: {
		default: SvelteComponent;
		metadata: { title: string; tags: string[] };
	} = await import(`../data/posts/${postid}.svx`);
	return {
		content: post.default,
		title: post.metadata.title,
		tags: post.metadata.tags,
		id: postid
	};
}
