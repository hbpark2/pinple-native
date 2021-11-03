import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

const DismissKeyboard: React.FC = ({ children }) => {
	const dissmissKeyboard = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback
			style={Platform.OS === "ios" ? { flex: 1 } : { height: "100%" }}
			onPress={dissmissKeyboard}
			disabled={Platform.OS === "web"}
		>
			{children}
		</TouchableWithoutFeedback>
	);
};

export default DismissKeyboard;
