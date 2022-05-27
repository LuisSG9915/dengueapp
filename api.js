const API = "http://192.168.100.6:8000/tasks"
// const API = "http://192.168.137.134:8000/tasks"

export const getTasks = async () => {
	const res = await fetch(API)
	return await res.json()
}

export const saveTask = async (newTask) => {
	const res = await fetch(API, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTask),
	})
	return await res.json
}
