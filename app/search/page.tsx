const SearchPage = async () => {
    const result = await new Promise<string>((resolve) =>
        setTimeout(() => resolve(Math.random().toString(36).substring(2)), 10000)
    );
    return <div>{result}</div>;
};

export default SearchPage;