import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../../components/auth/AuthButton";
import AuthLayout from "../../components/auth/AuthLayout";

const LoginWrap = styled.View`
	flex-direction: row;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
`;
const LoginText = styled.Text`
	color: #333;
`;
const LoginLink = styled.Text`
	color: ${(props) => props.theme.accentColor};
	font-weight: 600;
	text-align: center;
`;

const Welcome: React.FC<NativeStackScreenProps<any, "Welcome">> = ({
	navigation,
}) => {
	const goToCreateAccount = () => navigation.navigate("CreateAccount");
	const goToLogIn = () => navigation.navigate("LogIn");

	return (
		<AuthLayout>
			<AuthButton
				disabled={false}
				onPress={goToCreateAccount}
				text="시작하기"
			/>
			<LoginWrap>
				<LoginText>이미 계정이 있으신가요? </LoginText>
				<TouchableOpacity onPress={goToLogIn}>
					<LoginLink>로그인</LoginLink>
				</TouchableOpacity>
			</LoginWrap>
		</AuthLayout>
	);
};

export default Welcome;
