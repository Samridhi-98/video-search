import React from 'react';

//class based component
class SearchBar extends React.Component {

    state = { content: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.content);
        this.props.onSearch(this.state.content);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.content} onChange={event => this.setState({ content: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;