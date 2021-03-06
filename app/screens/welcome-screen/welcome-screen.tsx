import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, ImageStyle, View } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { Button } from "../../components/button"
import { Auth } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import { fontStyle } from "../../theme/fontStyle"
import { Icon } from "../../components/icon"
import { VectorIcon } from "../../components/vector-icon"
import { NavigationScreenProps } from "react-navigation"

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.lightYellow,
  padding: spacing.medium,
}

const HEADER_TEXT_WRAP: ViewStyle = {
  margin: 10,
}

const HEADER_TEXT: TextStyle = {
  fontSize: fontStyle.largeTitle,
  fontWeight: "bold",
  color: color.palette.black,
}

const GO_TO_SIGNUP: ViewStyle = {
  backgroundColor: color.palette.green,
  borderRadius: 30,
  paddingVertical: spacing.medium,
  marginTop: spacing.medium,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
}

const SIGNUP_TEXT: TextStyle = {
  fontSize: fontStyle.headline5,
  color: color.palette.white,
  marginLeft: spacing.small,
}

const ICON: ImageStyle = {
  width: 100,
  height: 100,
  marginTop: spacing.huge,
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = observer(props => {
  return (
    <Screen style={ROOT}>
      <Icon icon="logo" style={ICON} />
      <View style={HEADER_TEXT_WRAP}>
        <Text preset="header" text="식사일기에 오신 것을" style={HEADER_TEXT} />
        <Text preset="header" text="환영합니다." style={HEADER_TEXT} />
      </View>
      <Button
        onPress={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
        style={GO_TO_SIGNUP}
        children={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <VectorIcon name="google" color={color.palette.white} size={fontStyle.headline5} />
            <Text text="구글 계정으로 로그인" style={SIGNUP_TEXT} />
          </View>
        }
      />
    </Screen>
  )
})
