import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//code của mình
import { isAuth } from "../utils/auth/auth";
import { getUser } from "../store/modules/User/selectors";
const PublicRoutes = ({ component, ...props }) => {
    console.log({ component });
    console.log({ ...props });
    const user = useSelector(getUser);
    console.log({ user });

    //nếu đã Auth thì thiết lập route chuyển đến trang chủ (hiện giờ là chat) /
    if (isAuth(user)) {
        console.log(isAuth(user));
        return (
            <Route {...props}>
                <Redirect to="/" />
            </Route>
        );
    }
    //ngược lại cứ return page mà người dùng mong muốn
    return <Route {...props} component={component} />;
};

export default PublicRoutes;
