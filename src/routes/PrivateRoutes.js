import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//code của mình
import { isAuth, isPermission } from "../utils/auth/auth";
import UnAuthorizedPage from "../pages/Error/UnAuthorizedPage";
import { getUser } from "../store/modules/User/selectors";


//xử lý chung cho các route có thuộc tính là requiredAuth

//component: component sẽ được render
//permission: quyền yêu cầu mà người dùng phải có để truy cập vào route - sẽ = true hoặc false (mặc định là true)
//user: đối tượng người dùng (được lấy ở App và truyền xuống đây)
//props: các thuộc tính còn lại dành cho Route - thông thường bao gồm: exact, path,...
const PrivateRoutes = ({ component, permission = true, ...props }) => {
    console.log('11111111111111111');
    console.log({ component });
    console.log({ permission });
    console.log({ ...props });
    const user = useSelector(getUser);
    console.log({ user });
    //khi có backend thì thay thế "test" thành biến user
    if (isAuth(user)) {
        console.log(isAuth(user));
        //nếu đầy đủ quyền hạn thì cứ trả về trang mà người dùng mong muốn
        if (permission) {
            return <Route {...props} component={component} />;
        }
        //nếu không có quyền hạn truy cập trang thì trả về trang 403 - UnAuthorized
        else {
            return <Route {...props} > <Redirect to="/error/unAuthorized" /> </Route>
        }
    }
    //nếu không có auth và permission thì trả về một route có redirect đến trang login
    return (
        <Route {...props}>
            <Redirect to="/login" />
        </Route>
    );
};
export default PrivateRoutes;