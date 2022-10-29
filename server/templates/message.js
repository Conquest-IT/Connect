// Message template
const messageTemplate = otp => {
    return (
        `Dear User,\n` +
        `${otp} is your otp for verifying your account.Please Enter the OTP to proceed.\n` +
        `Regards\n` +
        `Shelai Dholai support team`
    );
};

module.exports = {
    messageTemplate,
};
