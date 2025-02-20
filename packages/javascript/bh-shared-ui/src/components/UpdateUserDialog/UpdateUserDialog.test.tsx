// Copyright 2025 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '../../test-utils';
import UpdateUserDialog from './UpdateUserDialog';
import { ListSSOProvidersResponse, SSOProvider } from 'js-client-library';

const testRoles = [
    { id: 1, name: 'Role 1' },
    { id: 2, name: 'Role 2' },
    { id: 3, name: 'Role 3' },
    { id: 4, name: 'Role 4' },
];

const testSSOProviders: SSOProvider[] = [
    {
        name: 'saml-provider-1',
        slug: 'saml-provider-1',
        type: 'SAML',
        details: {
            name: 'saml-provider',
            display_name: 'saml-provider',
            idp_issuer_uri: 'urn:saml-provider.com',
            idp_sso_uri: 'https://saml-provider.com/saml',
            principal_attribute_mappings: null,
            sp_issuer_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider',
            sp_sso_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/sso',
            sp_metadata_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/metadata',
            sp_acs_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/acs',
            sso_provider_id: 1,
            id: 1,
            created_at: '2024-01-01T12:00:00Z',
            updated_at: '2024-01-01T12:00:00Z',
        },
        login_uri: '',
        callback_uri: '',
        id: 1,
        created_at: '2024-01-01T12:00:00Z',
        updated_at: '2024-01-01T12:00:00Z',
    },
    {
        name: 'saml-provider-2',
        slug: 'saml-provider-2',
        type: 'SAML',
        details: {
            name: 'saml-provider',
            display_name: 'saml-provider',
            idp_issuer_uri: 'urn:saml-provider.com',
            idp_sso_uri: 'https://saml-provider.com/saml',
            principal_attribute_mappings: null,
            sp_issuer_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider',
            sp_sso_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/sso',
            sp_metadata_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/metadata',
            sp_acs_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/acs',
            sso_provider_id: 1,
            id: 1,
            created_at: '2024-01-01T12:00:00Z',
            updated_at: '2024-01-01T12:00:00Z',
        },
        login_uri: '',
        callback_uri: '',
        id: 2,
        created_at: '2024-01-01T12:00:00Z',
        updated_at: '2024-01-01T12:00:00Z',
    },
    {
        name: 'saml-provider-3',
        slug: 'saml-provider-3',
        type: 'SAML',
        details: {
            name: 'saml-provider',
            display_name: 'saml-provider',
            idp_issuer_uri: 'urn:saml-provider.com',
            idp_sso_uri: 'https://saml-provider.com/saml',
            principal_attribute_mappings: null,
            sp_issuer_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider',
            sp_sso_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/sso',
            sp_metadata_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/metadata',
            sp_acs_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/acs',
            sso_provider_id: 1,
            id: 1,
            created_at: '2024-01-01T12:00:00Z',
            updated_at: '2024-01-01T12:00:00Z',
        },
        login_uri: '',
        callback_uri: '',
        id: 3,
        created_at: '2024-01-01T12:00:00Z',
        updated_at: '2024-01-01T12:00:00Z',
    },
    {
        name: 'saml-provider-4',
        slug: 'saml-provider-4',
        type: 'SAML',
        details: {
            name: 'saml-provider',
            display_name: 'saml-provider',
            idp_issuer_uri: 'urn:saml-provider.com',
            idp_sso_uri: 'https://saml-provider.com/saml',
            principal_attribute_mappings: null,
            sp_issuer_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider',
            sp_sso_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/sso',
            sp_metadata_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/metadata',
            sp_acs_uri: 'https://test.bloodhoundenterprise.io/api/v1/login/saml/saml-provider/acs',
            sso_provider_id: 1,
            id: 1,
            created_at: '2024-01-01T12:00:00Z',
            updated_at: '2024-01-01T12:00:00Z',
        },
        login_uri: '',
        callback_uri: '',
        id: 4,
        created_at: '2024-01-01T12:00:00Z',
        updated_at: '2024-01-01T12:00:00Z',
    },
];

const testUser = {
    saml_provider_id: null,
    AuthSecret: {},
    roles: [
        {
            name: 'Role 1',
            permissions: [],
            id: 1,
        },
    ],
    first_name: 'Test',
    last_name: 'User',
    email_address: 'testuser@example.com',
    principal_name: 'testuser',
    id: '1',
};

const server = setupServer(
    rest.get(`/api/v2/roles`, (req, res, ctx) => {
        return res(
            ctx.json({
                data: {
                    roles: testRoles,
                },
            })
        );
    }),
    rest.get<any, any, ListSSOProvidersResponse>('/api/v2/sso-providers', (req, res, ctx) => {
        return res(
            ctx.json({
                data: testSSOProviders,
            })
        );
    }),
    rest.get('/api/v2/bloodhound-users/1', (req, res, ctx) => {
        return res(ctx.json({ data: testUser }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UpdateUserDialog', () => {
    type SetupOptions = {
        renderErrors?: boolean;
        renderLoading?: boolean;
    };

    const setup = (options?: SetupOptions) => {
        const user = userEvent.setup();
        const testOnClose = vi.fn();
        const testOnSave = vi.fn(() => Promise.resolve({ data: {} }));
        const testUser = {
            emailAddress: 'testuser@example.com',
            principalName: 'testuser',
            firstName: 'Test',
            lastName: 'User',
            password: 'adminAdmin1!',
            forcePasswordReset: false,
            role: testRoles[0],
        };

        render(
            <UpdateUserDialog
                userId={'1'}
                open={true}
                onClose={testOnClose}
                onSave={testOnSave}
                isLoading={options?.renderLoading || false}
                error={options?.renderErrors}
                hasSelectedSelf={false}
            />
        );

        return {
            user,
            testUser,
            testOnClose,
            testOnSave,
        };
    };

    it('should render an update user form', async () => {
        setup();

        expect(screen.getByText('Update User')).toBeInTheDocument();

        expect(await screen.findByLabelText('Email Address')).toBeInTheDocument();

        expect(screen.getByLabelText('Principal Name')).toBeInTheDocument();

        expect(screen.getByLabelText('First Name')).toBeInTheDocument();

        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();

        expect(await screen.findByLabelText('Authentication Method')).toBeInTheDocument();

        expect(screen.getByLabelText('Role')).toBeInTheDocument();

        expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();

        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('should call onClose when Close button is clicked', async () => {
        const { user, testOnClose } = setup();

        const cancelButton = await screen.findByRole('button', { name: 'Cancel' });

        await user.click(cancelButton);

        expect(testOnClose).toHaveBeenCalled();
    });

    it('should not call onSave when Save button is clicked and form input is invalid', async () => {
        const { user, testOnSave } = setup();

        const saveButton = await screen.findByRole('button', { name: 'Save' });

        await user.clear(screen.getByLabelText('Email Address'));

        await user.click(saveButton);

        expect(await screen.findByText('Email Address is required')).toBeInTheDocument();

        expect(testOnSave).not.toHaveBeenCalled();
    });

    it('should call onSave when Save button is clicked and form input is valid', async () => {
        const { user, testUser, testOnSave } = setup();

        expect(await screen.findByLabelText('Email Address')).toBeInTheDocument();

        await user.clear(screen.getByLabelText('Email Address'));
        await user.type(screen.getByLabelText('Email Address'), testUser.emailAddress);

        await user.clear(screen.getByLabelText('Principal Name'));
        await user.type(screen.getByLabelText('Principal Name'), testUser.principalName);

        await user.clear(screen.getByLabelText('First Name'));
        await user.type(screen.getByLabelText('First Name'), testUser.firstName);

        await user.clear(screen.getByLabelText('Last Name'));
        await user.type(screen.getByLabelText('Last Name'), testUser.lastName);

        await user.click(screen.getByRole('button', { name: 'Save' }));

        await waitFor(() => expect(testOnSave).toHaveBeenCalled(), { timeout: 30000 });
    });

    it('should display all available roles', async () => {
        const { user } = setup();

        await user.click(await screen.findByLabelText('Role'));

        for (const role of testRoles) {
            expect(await screen.findByRole('option', { name: role.name })).toBeInTheDocument();
        }
    });

    it('should display all available SSO providers', async () => {
        const { user } = setup();

        await user.click(await screen.findByLabelText('Authentication Method'));

        await user.click(await screen.findByRole('option', { name: 'Single Sign-On (SSO)' }));

        expect(screen.queryByLabelText('Initial Password')).not.toBeInTheDocument();

        expect(screen.queryByLabelText('Force Password Reset?')).not.toBeInTheDocument();

        expect(screen.getByLabelText('SSO Provider')).toBeInTheDocument();

        await user.click(screen.getByLabelText('SSO Provider'));

        for (const SSOProvider of testSSOProviders) {
            expect(await screen.findByRole('option', { name: SSOProvider.name })).toBeInTheDocument();
        }
    });

    it('should disable Cancel and Save buttons while isLoading is true', async () => {
        setup({ renderLoading: true });

        expect(await screen.findByRole('button', { name: 'Cancel' })).toBeDisabled();

        expect(await screen.findByRole('button', { name: 'Save' })).toBeDisabled();
    });

    it('should display error message when error prop is provided', async () => {
        setup({ renderErrors: true });

        expect(await screen.findByText('An unexpected error occurred. Please try again.')).toBeInTheDocument();
    });

    it('should clear out the sso provider id from submission data when the authentication method is changed', async () => {
        const { user, testUser, testOnSave } = setup();

        const saveButton = await screen.findByRole('button', { name: 'Save' });

        await user.clear(screen.getByLabelText('Email Address'));
        await user.type(screen.getByLabelText('Email Address'), testUser.emailAddress);

        await user.clear(screen.getByLabelText('Principal Name'));
        await user.type(screen.getByLabelText('Principal Name'), testUser.principalName);

        await user.clear(screen.getByLabelText('First Name'));
        await user.type(screen.getByLabelText('First Name'), testUser.firstName);

        await user.clear(screen.getByLabelText('Last Name'));
        await user.type(screen.getByLabelText('Last Name'), testUser.lastName);

        await user.click(await screen.findByLabelText('Authentication Method'));
        await user.click(await screen.findByRole('option', { name: 'Single Sign-On (SSO)' }));

        await user.click(screen.getByLabelText('SSO Provider'));
        await user.click(await screen.findByRole('option', { name: testSSOProviders[0].name }));

        await user.click(await screen.findByLabelText('Authentication Method'));
        await user.click(await screen.findByRole('option', { name: 'Username / Password' }));

        await user.click(saveButton);

        await waitFor(
            () => expect(testOnSave).toHaveBeenCalledWith(expect.objectContaining({ SSOProviderId: undefined })),
            {
                timeout: 30000,
            }
        );
    });
});