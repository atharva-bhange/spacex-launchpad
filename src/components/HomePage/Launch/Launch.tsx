import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import api from "utils/api";

const Launch: React.FC<{ launchId: string }> = ({ launchId }) => {
	const { isLoading, isError, data, isSuccess } = useQuery(
		["launch", launchId],
		() => api.get(`/launches/${launchId}`),
		{ enabled: !!launchId }
	);

	const renderLaunch = () => {
		if (isLoading) return "Loading";
		else if (isError) return "Error";
		else if (isSuccess)
			return <Link to={`/${launchId}`}>{data?.data.name}</Link>;
	};

	return <>{renderLaunch()}</>;
};

export default Launch;
