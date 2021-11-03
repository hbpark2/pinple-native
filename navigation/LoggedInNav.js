import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";

const Stack = createNativeStackNavigator();

const LoggedInNav = () => {
	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen
				name="Tabs"
				component={TabsNav}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default LoggedInNav;
