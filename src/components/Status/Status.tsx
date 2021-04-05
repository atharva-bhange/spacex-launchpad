import React from "react";

import "./Status.scss";

interface PropType {
	status:
		| "active"
		| "inactive"
		| "retired"
		| "lost"
		| "under construction"
		| "unknown"
		| "reused"
		| "not reused";
}

const Status: React.FC<PropType> = ({ status }) => {
	switch (status) {
		case "reused":
		case "active":
			return (
				<div className="status status-active">
					<i className="far fa-check-circle"></i>
					{status}
				</div>
			);
		case "inactive":
		case "retired":
		case "unknown":
		case "not reused":
			return (
				<div className="status">
					<i className="fas fa-minus-circle status-inactive"></i>
					{status}
				</div>
			);
		case "lost":
			return (
				<div className="status">
					<i className="fas fa-exclamation-circle status-lost"></i>
					{status}
				</div>
			);
		case "under construction":
			return (
				<div className="status status-construction">
					<i className="fas fa-truck-pickup"></i>
					{status}
				</div>
			);
		default:
			return <div className="status">{status}</div>;
	}
};

export default Status;
