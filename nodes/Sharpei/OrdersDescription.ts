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

				name: 'List Orders',
				value: 'getOrders',
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

				name: 'Get Order',
				value: 'getOrder',
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
		displayOptions: {
			show: {
				resource: ['orders'],
				operation: ['getOrder'],
			},
		},
	},


]


