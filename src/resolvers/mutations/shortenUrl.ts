import {ILink, Link} from "../../models"
import {generateHash} from "../../utils"

export async function shortenUrl(_: unknown, {longUrl}): Promise<ILink> {
	const link = <ILink>{
		longUrl: longUrl
	}

	const res = await Link.create(link)
	const hash = generateHash(link.id)
	link.url = `https://${process.env.SHORTEN_DOMAIN}/` + hash
	await Link.update(
		<ILink>{
			url: link.url
		},

		{
			where:
				{id: res.id}
		}
	)

	return link
}
