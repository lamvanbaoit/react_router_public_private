import Loadable from 'react-loadable';
import { Spin } from 'antd';

//định nghĩa các thuộc tính route cho các Route liên quan đến authentication như login register

const Login = Loadable({
    loader: () => import("../../pages/Login"),
    loading: () => <Spin />,
})

const Register = Loadable({
    loader: () => import("../../pages/Register"),
    loading: () => <Spin />,
})

// const ForgotPassword = Loadable({
//     loader: () => import("../../pages/ForgotPassword"),
//     loading: () => <Spin />,
// })

// const NewPassword = Loadable({
//     loader: () => import("../../pages/NewPassword"),
//     loading: () => <Spin />,
// })

// const VerificationCode = Loadable({
//     loader: () => import("../../pages/VerificationCode"),
//     loading: () => <Spin />,
// })

const authRoutes = [
    {
        path: "/login",
        exact: true,
        restricted: true,
        component: Login,
    },
    {
        path: "/register",
        exact: true,
        restricted: true,
        component: Register,

    },
    // {
    //     path: "/forgot-password",
    //     exact: true,
    //     restricted: true,
    //     component: ForgotPassword,
    // },
    // {
    //     path: "/new-password",
    //     exact: true,
    //     restricted: true,
    //     component: NewPassword,
    // },
    // {
    //     path: "/verification-code",
    //     exact: true,
    //     restricted: true,
    //     component: VerificationCode,
    // }
]

export default authRoutes;