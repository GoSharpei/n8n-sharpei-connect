import type { INodeProperties } from 'n8n-workflow';

export const ordersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['orders'],
			},
		},
		options: [
			{ //GET ORDERS
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				name: 'List orders',
				value: 'getOrders',
				description: 'Get orders',
				routing: {
					request: {
						method: 'GET',
						url: '/orders',
						headers: {
							Authorization: '={{$credentials.apiKey}}',
						},
				  }
				},
				action: 'List orders',
			},
			{ //GET A SINGLE ORDER
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				name: 'Get order',
				value: 'getOrder',
				// eslint-disable-next-line n8n-nodes-base/node-param-option-description-identical-to-name
				description: 'Get order',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/orders/" + $parameter["orderPid"] }}',
						headers: {
							Authorization: '={{$credentials.apiKey}}',
						},
				  }
				},
				action: 'Get a single order',
			},
    ],
		default: 'getOrders',
	},
]

export const ordersFields: INodeProperties[] = [


	{  //GET PRODUCT BY REMOTE ID FIELD////
		displayName: 'Order Pid',
		name: 'orderPid',
		type: 'string',
		required: true,
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-identical-to-display-name
		description: 'Order Pid',
		displayOptions: {
			show: {
				resource: ['orders'],
				operation: ['getOrder'],
			},
		},
	},


]


