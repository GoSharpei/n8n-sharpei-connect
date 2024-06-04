import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { productFields, productOperations } from './ProductDescription';
import { variantFields, variantOperations } from './VariantDescriptions';
import { statusOperations } from './StatusDescription';
import { optionsFields, optionsOperations } from './OptionsDescriptions';
import { ordersFields, ordersOperations } from './OrdersDescription';
import { customersFields, customersOperations } from './CustomersDescriptions';

export class Sharpei implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sharpei',
		name: 'Sharpei',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:logo.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Sharpei Api',
		defaults: {
			name: 'Sharpei',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'SharpeiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.prod.gosharpei.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// ----------------------------------
			//         Resources
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Customers',
						value: 'customers',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Options',
						value: 'options',
					},
					{
						name: 'Orders',
						value: 'orders',
					},
					{
						name: 'Products',
						value: 'product',
					},
					{
						name: 'Status',
						value: 'status',
					},
					{
						name: 'Variants',
						value: 'variants',
					},
				],
				default: 'product',
			},

			...productOperations,
			...productFields,
			...variantOperations,
			...variantFields,
			...statusOperations,
			...optionsOperations,
			...optionsFields,
			...ordersOperations,
			...ordersFields,
			...customersOperations,
			...customersFields,
		],
	};
}
