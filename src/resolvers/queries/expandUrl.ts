import {Link} from "../../models"

export async function expandUrl(_: unknown, {url}): Promise<string> {
	const link = await Link.findOne({raw: true, where: {url}})
	if (link)
		return link.longUrl
	else
		return null
}
