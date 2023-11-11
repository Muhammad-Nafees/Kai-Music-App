import Mainstack from "./MainStack";
import AuthStack from "./AuthStack";
import { login } from "../store/UserSlices";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";




const Routes = () => {

    const { kaiUser } = useSelector((state) => state)
    console.log("kaiUser---Routes", kaiUser?.name)

    return (
        <NavigationContainer independent={true}>
            {
                kaiUser.name ? <Mainstack /> : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Routes;
