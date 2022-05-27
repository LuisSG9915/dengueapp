import React from "react"
import { View } from "react-native"
import { styles } from "../theme/appTheme"
interface Props {
	children?: any
}

export const PanelSuperior = ({ children }: Props) => {
	return <View style={styles.panelSuperiorGris}>{children}</View>
}
