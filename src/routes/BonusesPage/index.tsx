import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData } from 'react-router';
import { mockData } from './mock';

const LazyBonusesPage = lazy(() =>
	import('./BonusesPage').then((module) => ({
		default: module.BonusesPage,
	}))
);

const BonusesPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyBonusesPage data={data} {...props} />
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return Promise.resolve({
		result: mockData,
	})
	 // тут будет вызов к апи исходя из данных запроса
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <BonusesPage />,
};
