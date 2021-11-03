import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Auth/Welcome";
import LogIn from "../screens/Auth/LogIn";
import CreateAccount from "../screens/Auth/CreateAccount";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				title: "PINPLE",
				headerTintColor: "#333",
			}}
		>
			<Stack.Screen
				name="Welcome"
				options={{ headerTitle: "" }}
				component={Welcome}
			/>
			<Stack.Screen
				name="LogIn"
				component={LogIn}
				options={{
					headerTitle: "",
				}}
			/>
			<Stack.Screen
				name="CreateAccount"
				component={CreateAccount}
				options={{
					headerTitle: "",
				}}
			/>
		</Stack.Navigator>
	);
};
export default LoggedOutNav;
