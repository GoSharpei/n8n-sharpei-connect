import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SharpeiApi implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-uppercase-first-char
	name = 'SharpeiApi';
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-display-name-missing-api
	displayName = 'Sharpei';
	documentationUrl = 'https://help.gosharpei.com/en/articles/9200905-where-do-i-find-my-api_keys';
	properties: INodeProperties[] = [
		{
			displayName: 'Private API Key',
			name: 'apiKey',
			// eslint-disable-next-line n8n-nodes-base/cred-class-field-unobscured-sensitive-input
			type: 'string',
			default: '',
			placeholder:'Private API key from your Sharpei account.'
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{$credentials.apiKey}}'
			}
		},
	};
}
