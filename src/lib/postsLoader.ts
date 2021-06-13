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

export async function loadPostIds(fetch): Promise<string[]> {
	return await (await fetch('/posts/posts.json')).json();
}
export async function loadPosts(fetch) {
	const postids = await loadPostIds(fetch);
	const posts = Promise.all(postids.map((postid) => getPostData(postid)));

	return posts;
}

export async function loadPost(fetch, id: string) {
	const postids = await loadPostIds(fetch);

	if (postids.includes(id)) {
		return getPostData(id);
	} else {
		throw new Error('404 Post not found');
	}
}

export async function getTagPosts(fetch, tag: string) {
	return (await loadPosts(fetch)).filter((p) => p.tags.includes(tag));
}
