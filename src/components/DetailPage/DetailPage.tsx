import React from "react";
import moment from "moment";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./DetailPage.scss";
import Header from "components/Header";
import Status from "components/Status";
import api from "utils/api";

const DetailPage: React.FC = () => {
	const params = useParams<{ id: string }>();

	const { isLoading, isError, data, isSuccess } = useQuery(
		["launch", params?.id],
		() => api.get(`/launches/${params.id}`),
		{ enabled: !!params }
	);

	const renderDetail = () => {
		if (isLoading)
			return (
				<div className="loader">
					<Spinner animation="border" variant="light" />
				</div>
			);
		else if (isError) return "Loading";
		else if (isSuccess) {
			const detail = data?.data;
			const reuseStatus = detail.fairings
				? detail.fairings.reused
					? "reused"
					: "not reused"
				: "not reused";
			return (
				<div className="detail-container">
					<div className="detail-header mb-3">Launch Details</div>
					<div className="detail-name">
						{detail.name} <Status status={reuseStatus} />
					</div>
					<div className="detail-date mb-2">
						{moment(detail.date_utc).format("MMMM Do YYYY, h:mm:ss a")}
						{"  "}
						UTC
					</div>
					<div className="detail-details mb-2">
						{detail.details === null ? "No Details Found" : detail.details}
					</div>
				</div>
			);
		}
	};

	return (
		<div className="detail">
			<Header />
			{renderDetail()}
		</div>
	);
};

export default DetailPage;
