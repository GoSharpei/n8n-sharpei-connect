import type { INodeProperties } from 'n8n-workflow';

export const customersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customers'],
			},
		},
		options: [
			{ //LIST CUSTOMERS
				name: 'List Customers',
				value: 'getCustomers',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/customer" }}',
					}
				},
				action: 'List customers',
			},
			{ //CREATE A CUSTOMER
				name: 'Create Customer',
				value: 'createCustomer',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/customer" }}',
						body: '={{ JSON.parse($parameter["customerDataJson"]) }}',
						headers: {
						Accept: '*/*',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Create customer',
			},
			{ //GET A CUSTOMER
				name: 'Get Customer',
				value: 'getCustomer',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/customer/" + $parameter["customerPid"] }}',
						headers: {
						Accept: '*/*',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Get customer',
			},
			{//UPDATE A CUSTOMER
				name: 'Update Customer',
				value: 'updateCustomer',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/customer/" + $parameter["customerPid"]}}',
						body: '={{ JSON.parse($parameter["productDataJson2"]) }}',
						headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Update customer',
			},
		],
		default: 'getCustomers',
	},
]

export const customersFields: INodeProperties[] = [

	{   //LIST CUSTOMERS FIELD
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['getCustomers'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['getCustomers'],
				returnAll: [false],
			},
		},
	},
	{   //CREATE A CUSTOMER FIELD JSON
		displayName: 'Customer Data (JSON)',
		name: 'customerDataJson',
		type: 'json',
		default: JSON.stringify({
			first_name:"first name",
			last_name:"last name",
			email:"example@email.com",
			customer_type: "individual",
			currency :"US",
			phone:"989889989",
			user_id:"",
			identification_number:"789456"
	}, null, 2),
		description: 'Customer data in JSON format',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['createCustomer', 'updateCustomer'],
			},
		},
	},
	{  //GET A CUSTOMER FIELD////
		displayName: 'Customer PID',
		name: 'customerPid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customers'],
				operation: ['getCustomer', 'updateCustomer'],
			},
		},
	},
]
