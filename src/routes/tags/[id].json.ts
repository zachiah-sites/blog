import loadTag from '$lib/server/loadTag';

export async function get({ params }) {
	let data;
	try {
		data = await loadTag(params.id);
	} catch {
		return { status: 404, message: 'No Such Tag' };
	}
	return { body: data };
}
