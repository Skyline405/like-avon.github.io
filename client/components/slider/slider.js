import React, { Component } from 'react';


export default class Slider extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedItem: props.selectedItem | 0
		};
	}

	onPrevClick(e) {
		e && e.preventDefault();
		return this.moveTo(this.state.selectedItem - 1);
	};

	onNextClick(e) {
		e && e.preventDefault();
		return this.moveTo(this.state.selectedItem + 1);
	};

	moveTo(position) {
		const lastPosition = this.props.srcList.length - 1;

		if (position < 0 ) {
			position = lastPosition;
		}

		if (position > lastPosition) {
			position = 0;
		}

		this.setState({
			selectedItem: position
		});
		return false;
	};

	render() {
		let {srcList, className} = this.props;
		let {selectedItem} = this.state;

		return (
			<div className="carousel-outer">
				<div className={"carousel slide " + className} data-ride="carousel">

					<div className="carousel-inner">

						{srcList.map((src, i) => {
							let active = i == selectedItem ? ' active' : '';
							return <div key={i} className={'carousel-item' + active}>
								<img className="d-block w-100" src={src}/>
							</div>
						})}

					</div>

					<a href="#" className="carousel-control-prev" onClick={this.onPrevClick.bind(this)}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>

					<a href="#" className="carousel-control-next" onClick={this.onNextClick.bind(this)}>
						<span className="carousel-control-next-icon png-shadow" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<div className="text-center">
					<span className="badge badge-danger">
						{`${selectedItem +1}/${srcList.length}`}
					</span>
				</div>
			</div>
		);
	}

}
