import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Image, SafeAreaView, StatusBar, useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./styles/styled";
import LoggedInNav from "./navigation/LoggedInNav";
import LoggedOutNav from "./navigation/LoggedOutNav";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar, cache } from "./apollo";

const loadFonts = (fonts: any) =>
	fonts.map((font: string) => Font.loadAsync(font));

const loadImages = (images: any[]) =>
	images.map((image) => {
		if (typeof image === "string") {
			return Image.prefetch(image);
		} else {
			return Asset.loadAsync(image);
		}
	});

export default function App() {
	const [ready, setReady] = useState(false);
	const onFinish = () => setReady(true);
	const isLoggedIn = useReactiveVar(isLoggedInVar);

	const startLoading = async () => {
		const fonts = loadFonts([Ionicons.font]);
		const images = loadImages([
			require("./assets/test.jpeg"),
			"https://reactnative.dev/img/oss_logo.png",
		]);
		await Promise.all([...fonts, ...images]);
	};
	const isDark = useColorScheme() === "dark";

	if (!ready) {
		return (
			<AppLoading
				startAsync={startLoading}
				onFinish={onFinish}
				onError={console.error}
			/>
		);
	}
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<NavigationContainer>
					{/* {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />} */}
					<LoggedInNav />
					{/* <LoggedOutNav /> */}
				</NavigationContainer>
			</ThemeProvider>
		</ApolloProvider>
	);
}
