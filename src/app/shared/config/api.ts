let apiHost: string = "https://ai-lab-backend.herokuapp.com/";
export default {
    auth: {
        login: apiHost + "api/v1/auth/login",
        signup: apiHost + "api/v1/auth/signup",
    },
    admin: {
        bot: apiHost + "api/v1/admin/bot",
        faq: apiHost + "api/v1/admin/faq"
    }
}