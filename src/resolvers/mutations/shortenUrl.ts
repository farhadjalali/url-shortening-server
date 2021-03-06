import {ILink, Link} from '../../models'
import {generateHash} from '../../utils'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function shortenUrl(_: unknown, {longUrl}): Promise<ILink> {
	// if (process.env.MOCK_DB) {
	// 	return {longUrl, url: "http://mock" + Math.random()} as ILink
	// }

	const link = <ILink>{
		longUrl: longUrl
	}

	const res = await Link.create(link)
	const hash = generateHash(res.id)
	link.url = `https://${process.env.SHORTEN_DOMAIN}/` + hash
	await Link.update(
		<ILink>{
			url: link.url
		}, {
			where: {id: res.id}
		}
	)

	return link
}
