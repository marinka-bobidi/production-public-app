import React, { lazy, Suspense } from 'react';
import {
	ActionFunctionArgs,
	Await,
	data,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';
import { LoaderData } from './loaderData';
import { values, nkoCardsData, nkoFaqCard, howToWorkSteps } from './mock';

const LazyFoundationsPage = lazy(() =>
	import('./FoundationsPage').then((module) => ({
		default: module.FoundationsPage,
	}))
);

const FoundationsPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<typeof loader>();
	return (
		<Suspense fallback={null}>
			<Await resolve={data}>
				<LazyFoundationsPage {...props} data={data} />
			</Await>
		</Suspense>
	);
};

async function loader({ request }: LoaderFunctionArgs): Promise<LoaderData> {
	return Promise.resolve(
		{
			stats: values,
			nkoCardsData: nkoCardsData,
			nkoFaqCard: nkoFaqCard,
			howToWorkSteps: howToWorkSteps,
		}
	); // тут будет вызов к апи исходя из данных запроса
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export default {
	loader,
	action,
	element: <FoundationsPage />,
};
