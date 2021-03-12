import React from 'react';
import axios from 'axios'
import Navigation from "./Navigation";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            query: '', 
            results: {},
            loading: false, 
            message: '',
        }
        this.cancel = '';
    }

    fetchSearchResults = (updatedPageNo, query) => {
        const pageNumber = updatedPageNo ? `&ingr=10&from=${updatedPageNo}` : ''; // ingr

        const APP_ID = 'bb6b3d95';
        const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';
        const searchURL = `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}`

        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios.get(searchURL, {
            cancelToken: this.cancel.token
        })
        .then(res => {
            // const resultNotFound = 
            // console.warn(res);
            const resultNotFoundMsg = res.data.hits.length
                                    ? 'There are no search results, please try a new search'
                                    : '';
            this.setState( {
                results: res.data.hits,
                message: resultNotFoundMsg,
                loading: false
            })
        })
        .catch(error=> {
            if (axios.isCancel(error) || error) {
                this.setState( {
                    loading: false,
                    message: 'Failed to fetch the data'
                }
                )
            }
        })
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState( {query: query, loading: true, message: ''}, () => {
            this.fetchSearchResults(1, query);
        } );
        
    };

    render() {
        const {query} = this.state;
        return (
            <div className="container">
                <Navigation/>
                <br/><br/><br/><br/><br/><br/><br/>
                <h2 className="heading">Smoothies</h2>
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value=""
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />
                </label>
            </div>
        )
    }
}

export default HomePage