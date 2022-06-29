
const fetchApi = async (endpoint: string) => {

	const response = await fetch(`https://5f7998dbe402340016f9321f.mockapi.io/${endpoint}`)

	if (!response.ok) {
		return new Error(response.statusText)
	}

	const data = await response.json()

	return data
		
}

export default fetchApi