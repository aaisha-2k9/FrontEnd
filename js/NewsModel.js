import {
    postControl
} from "./NewsController.js";

//To fetch the required data
export  class dataFetch {

    constructor(source) {
        this.source = source;
    }

    fetchData = () => {

        fetch(`https://newsapi.org/v1/articles?source=${this.source}&apiKey=0c26661baae04bf9a125f9f15dc7ff83`)
            .then(response => response.json())
            .then(data => {
                let obj = new postControl();
                obj.setPostData(data.source, data.articles);

            })

    }
}
