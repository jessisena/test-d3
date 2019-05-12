
import axios from "axios";

export default class Utils {

	static getAlbumsList() {

		return new Promise((resolve,reject) =>{

			axios.get("https://jsonplaceholder.typicode.com/albums").then(({data}) => {

				if(data){

					resolve(data);
				
				}

				reject();
			
			}).catch(e => reject(e));

		});

	}

}