import Axios from "axios";

export const FetchData = () => {
	var config = {
		method: "get",
		url: "https://assessment-edvora.herokuapp.com",
		mode: "no-cors",
		headers: {},
	};

	Axios(config)
		.then(function (response) {
			// console.log(JSON.stringify(response.data));
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
