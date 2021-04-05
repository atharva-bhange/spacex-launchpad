import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

import Header from "components/Header";
import "./HomePage.scss";
import Status from "./Status";

const HomePage: React.FC = () => {
	return (
		<div className="homepage">
			<Header />
			<div className="tab-container">
				<Tab.Container defaultActiveKey="first">
					<Row style={{ margin: "0 0 0 0" }}>
						<Col sm={2}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={10}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<div className="name mb-1">
										VAFB SLC 3W <Status status="under construction" />
									</div>
									<div className="full-name mb-2">
										Vandenberg Air Force Base Space Launch Complex 3W
									</div>
									<div className="details mb-2">
										SpaceX's original west coast launch pad for Falcon 1. It was
										used in a static fire test but was never employed for a
										launch, and was abandoned due to range scheduling conflicts
										arising from overflying other active pads.
									</div>
									<div className="launches">
										Launches
										<ul className="pt-2">
											<li>Falcon 9 Test Flight</li>
											<li>Falcon 1 Test Flight</li>
										</ul>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">test 2</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</div>
	);
};

export default HomePage;
