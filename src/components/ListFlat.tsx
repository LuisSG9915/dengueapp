import { View, Text, FlatList } from "react-native"
import React from "react"
import { styles } from "../theme/appTheme"
import DengueItem from "./DengueItem"
// Definimos tasks como atributo que se arrastra desde Alertas
interface Props {
	tasks: null
}

const ListFlat = ({ tasks }: Props) => {
	const renderItem = ({ item }) => {
		return <DengueItem task={item}></DengueItem>
	}

	return (
		<FlatList
			style={{ width: "80%", height: "25%" }}
			data={tasks}
			keyExtractor={(item) => item.id + ""}
			renderItem={renderItem}
		></FlatList>
	)
}

export default ListFlat
