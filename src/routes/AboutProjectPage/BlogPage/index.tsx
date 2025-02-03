import React, { lazy, Suspense } from 'react';
import {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';
import { blogPageMockData } from './mock'; // Моковые данные
import { LoaderData } from './loaderData';

const LazyBlogPage = lazy(() =>
	import('./BlogPage').then((module) => ({
		default: module.BlogPage,
	}))
);

const BlogPageWrapper = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyBlogPage {...props} data={data} />
		</Suspense>
	);
};

async function loader({
  params,
  request,
}: LoaderFunctionArgs): Promise<LoaderData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return blogPageMockData;
}

async function action({ params, request }: ActionFunctionArgs) {
	return null;
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <BlogPageWrapper />,
};
