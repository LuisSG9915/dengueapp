import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { InputBox } from "../components/InputBox"
import { styles } from "../theme/appTheme"
import { useNavigation } from "@react-navigation/native"
import { PanelSuperior } from "../components/PanelSuperior"

export const CrearUsuarios = () => {
	const navigation = useNavigation()
	return (
		<View style={{ backgroundColor: "red", flex: 1 }}>
			{/* FIXME: Insertar imagen o icono */}
			<PanelSuperior>
				{/* FIXME: Insertar imagen */}

				<Text style={styles.headerTexto}>
					Nombre de usuario
				</Text>
				<InputBox
					placeHolder={
						"Nombre de usuario"
					}
				></InputBox>
				<Text style={styles.headerTexto}>
					Email
				</Text>
				<InputBox
					placeHolder={"Email"}
				></InputBox>
				<Text style={styles.headerTexto}>
					Contraseña
				</Text>
				<InputBox
					placeHolder={"Contraseña"}
				></InputBox>
				<Text style={styles.headerTexto}>
					Puesto de trabajo
				</Text>
				<InputBox
					placeHolder={
						"Puesto de trabajo"
					}
				></InputBox>
				<Text style={styles.headerTexto}>
					Rol
				</Text>
				<InputBox
					placeHolder={"Rol"}
				></InputBox>

				<TouchableOpacity
					style={{ marginVertical: 50 }}
					onPress={() => null}
				>
					<View style={styles.botonBox}>
						<Text
							style={
								styles.botonText
							}
						>
							{" "}
							Registrar
							usuario
						</Text>
					</View>
				</TouchableOpacity>
			</PanelSuperior>
		</View>
	)
}
