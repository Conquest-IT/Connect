import config from "config";
import Cookies from "js-cookie";

const base = config.baseURL;

const sendOTP = async phone => {
    try {
        const token = Cookies.get("token");

        const response = await fetch(`${base}/api/auth/sign-in`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: "Bearer " + token,
            },
            body: JSON.stringify({ phone: phone }),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const verifyOTP = async data => {
    try {
        const token = Cookies.get("token");

        const response = await fetch(`${base}/api/auth/verify-otp`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: "Bearer " + token,
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { sendOTP, verifyOTP };
