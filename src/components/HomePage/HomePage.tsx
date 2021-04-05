import React from "react";
import { Tab, Row, Col, Nav, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";

import Header from "components/Header";
import "./HomePage.scss";
import Status from "components/Status";
import Launch from "./Launch";
import api from "utils/api";

const HomePage: React.FC = () => {
	const { isLoading, isError, data, isSuccess } = useQuery("launchpads", () =>
		api.get("/launchpads")
	);

	const renderLaunches = (launches: string[]) => {
		if (launches.length === 0) return <p className="pt-2">No Launches Yet</p>;
		return (
			<ul className="pt-2">
				{launches
					.reverse()
					.slice(0, 3)
					.map((launch) => (
						<li>
							<Launch key={launch} launchId={launch} />
						</li>
					))}
			</ul>
		);
	};

	const renderContent = () => {
		if (isLoading) {
			return (
				<div className="loader">
					<Spinner animation="border" variant="light" />
				</div>
			);
		} else if (isError) {
			return <div>Error</div>;
		} else if (isSuccess) {
			const list = data?.data;
			return (
				<div className="tab-container">
					<Tab.Container defaultActiveKey={list[0].name}>
						<Row style={{ margin: "0 0 0 0" }}>
							<Col sm={2}>
								<Nav variant="pills" className="flex-column">
									{list.map((launchpad: any, index: number) => (
										<Nav.Item key={index}>
											<Nav.Link eventKey={launchpad.name}>
												{launchpad.name}
											</Nav.Link>
										</Nav.Item>
									))}
								</Nav>
							</Col>
							<Col sm={10}>
								<Tab.Content>
									{list.map((launchpad: any, index: number) => (
										<Tab.Pane key={index} eventKey={launchpad.name}>
											<div className="name mb-1">
												{launchpad.name} <Status status={launchpad.status} />
											</div>
											<div className="full-name mb-2">
												{launchpad.full_name}
											</div>
											<div className="details mb-2">{launchpad.details}</div>
											<div className="launches">
												Launches
												{renderLaunches(launchpad.launches as string[])}
											</div>
										</Tab.Pane>
									))}
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			);
		}
	};

	return (
		<div className="homepage">
			<Header />
			{renderContent()}
		</div>
	);
};

export default HomePage;
