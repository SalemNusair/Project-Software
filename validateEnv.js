const envalid = require("envalid");
const { str, bool, url, num, email } = envalid;

// Note: this file gets triggered by 'validate-env' script

envalid.cleanEnv(process.env, {
    REACT_APP_API_KEY: str(),
    REACT_APP_AUTH_DOMAIN: str(),
    REACT_APP_DATABASE_URL: url(),
    REACT_APP_PROJECT_ID: str(),
    REACT_APP_BUCKET: str(),
    REACT_APP_MSG_SENDER_ID: num(),
    REACT_APP_REPORT_ISSUES: bool(),
    REACT_APP_ALLOW_MANUAL_RAMCIS_NUM_GENERATE: bool(),
    REACT_APP_ENV: str(),
    GMAIL_PASS: str(),
    GMAIL_USER: email(),
    FIREBASE_TOKEN: str(),
    REACT_APP_URL: url(),
});