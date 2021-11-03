import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "./SharedStackNavFactory";

const Tabs = createBottomTabNavigator();

const TabsNav = () => {
	return (
		<Tabs.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#fff",
				tabBarStyle: {
					borderColor: "rgba(255,255,255,0.3)",
					backgroundColor: "#333",
				},
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<TabIcon iconName="earth" color={color} focused={focused} />
					),
				}}
			>
				{() => <StackNavFactory screenName="Home" />}
			</Tabs.Screen>

			<Tabs.Screen
				name="feed"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<TabIcon iconName={"grid"} color={color} focused={focused} />
					),
				}}
			>
				{() => <StackNavFactory screenName="Feed" />}
			</Tabs.Screen>
			<Tabs.Screen
				name="upload"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<TabIcon
							iconName="add-circle"
							color={color}
							size={35}
							focused={focused}
						/>
					),
				}}
			>
				{() => <StackNavFactory screenName="Upload" />}
			</Tabs.Screen>

			<Tabs.Screen
				name="chat"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<TabIcon iconName="chatbubbles" color={color} focused={focused} />
					),
				}}
			>
				{() => <StackNavFactory screenName="Chat" />}
			</Tabs.Screen>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => (
						<TabIcon iconName="person" color={color} focused={focused} />
					),
				}}
			>
				{() => <StackNavFactory screenName="Profile" />}
			</Tabs.Screen>
		</Tabs.Navigator>
	);
};

export default TabsNav;
