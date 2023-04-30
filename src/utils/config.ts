const environmentVariables={
    googleOauthClientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
    googleOauthClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    teamEmail: process.env.TEAM_EMAIL as string,
    emailHost: process.env.EMAIL_HOST as string,
    emailPort: process.env.EMAIL_PORT as string,
    emailPassword: process.env.EMAIL_PASSWORD as string,
};

export default environmentVariables;