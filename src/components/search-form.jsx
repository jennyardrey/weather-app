import React from 'react';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({
			searchText: event.target.value,
		});
	}

	render() {
		const { searchCity } = this.props;
		const { searchText } = this.state;
		return <div>
			<input
				value={this.state.searchText}
				onChange={this.handleInputChange}
				className='search'
				type='text'
				placeholder="Search for a city"></input>
			<button
				onClick={e => searchCity(e, searchText)}
				type="submit">
				Search
				</button>
		</div>
	}
}

export default SearchForm