import {Sequelize, BuildOptions, DataTypes, Model} from "sequelize";

export interface ILink {
	id: number;
	long_url: string;
	url: string;
	created_at: Date;
	updated_at: Date;
}

export interface LinkModel extends Model<ILink>, ILink {
}

export class Link extends Model<LinkModel, ILink> {
}

export type LinkStatic = typeof Model & {
	new(values?, options?: BuildOptions): LinkModel;
};

export function linkFactory(sequelize: Sequelize): LinkStatic {
	return <LinkStatic>sequelize.define('link', {
			id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
			long_url: {type: DataTypes.TEXT},
			url: {type: DataTypes.TEXT}
		}, {
			timestamps: true,
			schema: 'public',
		}
	);
}
