import React from "react"
import { View } from "react-native"
import { styles } from "../theme/appTheme"
interface Props {
	children?: any
}

export const PanelInferiorRojo = ({ children }: Props) => {
	return <View style={styles.panelInferiorRed}>{children}</View>
}
