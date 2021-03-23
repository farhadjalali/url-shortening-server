import {Sequelize, BuildOptions, DataTypes, Model} from "sequelize"

export interface ILink {
	id: number
	longUrl: string
	url: string
}

export interface LinkModel extends Model<ILink>, ILink {
}

export class Link extends Model<LinkModel, ILink> {
}

export type LinkStatic = typeof Model & {
	new(values?, options?: BuildOptions): LinkModel
};

export function linkFactory(sequelize: Sequelize): LinkStatic {
	return <LinkStatic>sequelize.define('link', {
			id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
			longUrl: {type: DataTypes.TEXT},
			url: {type: DataTypes.TEXT}
		}, {
			schema: 'public',
		}
	)
}
