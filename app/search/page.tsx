export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SearchPage = async () => {
    const result = await new Promise<string>((resolve) =>
        setTimeout(() => resolve(Math.random().toString(36).substring(2)), 5000)
    );
    return <div>{result}</div>;
};

export default SearchPage;