import React from "react";
import moment from "moment";

import "./DetailPage.scss";
import Header from "components/Header";
import Status from "components/Status";

const DetailPage: React.FC = () => {
	return (
		<div className="detail">
			<Header />
			<div className="detail-container">
				<div className="detail-header mb-3">Launch Details</div>
				<div className="detail-name">
					Falcon 9 Test Flight <Status status="not reused" />
				</div>
				<div className="detail-date mb-2">
					{moment("2010-06-04T18:45:00.000Z").format("MMMM Do YYYY, h:mm:ss a")}
					{"  "}
					UTC
				</div>
				<div className="detail-details mb-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam
					consequuntur optio cumque natus iste error. Accusamus est ad optio?
					Earum, quas optio modi architecto nihil nulla nostrum eaque
					asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa omnis dolor quas odio nihil excepturi nesciunt odit cumque,
					magnam, nisi quia earum libero maiores! Error quas facilis laudantium
					minima necessitatibus?
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
