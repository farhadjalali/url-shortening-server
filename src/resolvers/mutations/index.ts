import {ILink, Link} from "../../models";
import {generateHash} from "../../utils";

export async function shortenUrl(_: unknown, {longUrl}): Promise<ILink> {
	const link = <ILink>{
		long_url: longUrl
	}

	const res = await Link.create(link)
	link.id = res.id
	const hash = generateHash(link.id)
	link.url = `https://${process.env.SHORTEN_DOMAIN}/` + hash
	await Link.update(<ILink>{long_url: link.long_url}, {where: {id: res.id}})

	return link
}
