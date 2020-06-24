import * as React from "react";
import gmailSGV from "./svg/gmail.svg";
import sadSGV from "./svg/sad.svg";
import forbiddenSGV from "./svg/forbidden.svg";
import billboardSGV from "./svg/billboard.svg";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {}

	componentDidMount() {}

	render() {
		return (
			<main role="main">
				<div className="jumbotron">
					<div className="container">
						<img
							src={gmailSGV}
							width="100"
							height="100"
							className="d-inline-block"
						/>
						<h1 className="display-3">Hello, User!</h1>
						<p>
							This is an app for analysing your e-mails. It tells
							you which companies send you a lot of adds.
						</p>
						<p>
							<a
								className="btn btn-primary btn-lg"
								href="/adAnalysis"
								role="button"
							>
								Learn more &raquo;
							</a>
						</p>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h2>How does it work?</h2>
							<img
								src={sadSGV}
								width="80"
								height="100"
								className="d-inline-block"
							/>
							<p>
								It's simple, we get your ads e-mail and then we
								do some analysis in order to show you the
								companies(top 10) which send you the e-mails.
							</p>
						</div>
						<div className="col-md-4">
							<h2>Ads ?</h2>
							<img
								src={billboardSGV}
								width="80"
								height="100"
								className="d-inline-block"
							/>

							<p>
								How do I know if I receive ads in my mail box?
								Don't worry, we do the job for you and the
								results will be displayed in a user-friendly
								page.
							</p>
						</div>
						<div className="col-md-4">
							<h2>No ads</h2>
							<img
								src={forbiddenSGV}
								width="80"
								height="100"
								className="d-inline-block"
							/>
							<p>
								No more ads from weird companies. Don't know who
								send you many e-mails? Let's do some analysis on
								your e-mail box.
							</p>
						</div>
					</div>

					<hr />
				</div>
			</main>
		);
	}
}