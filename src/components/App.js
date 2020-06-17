import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../api/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    // onSearchSubmit(content){
    //     console.log(content);
    // }

    state = { videos: [], SelectedVideo: null };

    // Providing default searchitem through componentDidMount method as soon as App get rendered 
    // "cats" will get display on the screen as a default item.

    componentDidMount() {
        this.onSearchSubmit('cats');
    }


    onSearchSubmit = async content => {

        const response = await YouTube.get('/search', {
            params: {
                q: content
            }
        });
        this.setState({
            videos: response.data.items,
            SelectedVideo: response.data.items[0]
        });
        // console.log(response);
    };

    onVideoSelect = (video) => {
        // console.log("This is App :",video);
        this.setState({ SelectedVideo: video });
    };

    render() {
        return ( <
            div className = "ui container"
            style = {
                { marginTop: "20px" } } >
            <
            SearchBar onSearch = { this.onSearchSubmit }
            /> <
            div className = "ui grid" >
            <
            div className = "ui row" >
            <
            div className = "eleven wide column" >
            <
            VideoDetail video = { this.state.SelectedVideo }
            /> <
            /div> <
            div className = "five wide column" >
            <
            VideoList videos = { this.state.videos }
            onVideoSelect = { this.onVideoSelect }
            /> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}



export default App;