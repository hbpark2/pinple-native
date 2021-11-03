import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Feed from "../screens/Feed/Feed";
import Profile from "../screens/Profile/Profile";
import Upload from "../screens/Upload/Upload";
import Chat from "../screens/Chat/Chat";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

export default function SharedStackNav({ screenName }) {
	return (
		<Stack.Navigator
			headerMode="screen"
			screenOptions={{
				headerBackTitleVisible: false,
				headerTintColor: "#333",
				headerStyle: {
					backgroundColor: "#fff",
					shadowColor: "#333",
				},
			}}
		>
			{screenName === "Home" ? (
				<Stack.Screen
					name={"Home"}
					component={Home}
					options={{ headerShown: false }}
				/>
			) : null}

			{screenName === "Feed" ? (
				<Stack.Screen
					name={"Feed"}
					component={Feed}
					options={{ headerShown: false }}
				/>
			) : null}
			{screenName === "Upload" ? (
				<Stack.Screen
					name={"Upload"}
					component={Upload}
					options={{ headerShown: false }}
				/>
			) : null}
			{screenName === "Chat" ? (
				<Stack.Screen
					name="Chat"
					component={Chat}
					options={{ headerShown: false }}
				/>
			) : null}
			{screenName === "Profile" ? (
				<Stack.Screen
					name={"Profile"}
					component={Profile}
					options={{ headerShown: false }}
				/>
			) : null}
		</Stack.Navigator>
	);
}
