import {ILink, Link} from "../../models";

export async function expandUrl(_: unknown, {hash}): Promise<ILink> {
	return await Link.findOne({raw: true, where: {hash: url}})
}
