import { useEffect, useState } from 'react';
import MovieCard from './movie-card';
import { Skeleton, Pagination } from 'antd';

const Movies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalMovies, setTotalMovies] = useState(0);

    const [pageSize, setPageSize] = useState(10);

    const getMovies = async (page, size) => {
        setLoading(true);
        const response = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&page=${page}&limit=${size}`)).json();
        setMovies(response.data.movies);
        setTotalMovies(response.data.movie_count);
        setLoading(false);
    };

    useEffect(() => {
        getMovies(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    return (
        <div style={{ padding: 16 }}>
            <h1 style={{ margin: 0, marginBottom: 16}}>Movies</h1>
            <Pagination 
                align="center" 
                style={{ margin: '2rem' }} 
                current={currentPage} 
                total={totalMovies} 
                pageSize={pageSize} 
                onChange={handlePageChange} 
                showSizeChanger 
                onShowSizeChange={handlePageChange}
                pageSizeOptions={['10', '20', '30', '40', '50']}
            />
            {loading ? (
                <Skeleton />
            ) : (
                <section
                    style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                >
                    {movies.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                    ))}
                </section>
            )}
            <Pagination 
                align="center" 
                style={{ margin: '2rem' }} 
                current={currentPage} 
                total={totalMovies} 
                pageSize={pageSize} 
                onChange={handlePageChange} 
                showSizeChanger 
                onShowSizeChange={handlePageChange}
                pageSizeOptions={['10', '20', '30', '40', '50']}
            />
        </div>
    );
}

export default Movies;