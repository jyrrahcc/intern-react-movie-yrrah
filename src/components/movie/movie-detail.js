import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Tag } from 'antd';

const MovieDetail = () => {
    const [movie, setMovie] = useState({});

    const getMovie = async (id) => {
        const response = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(response.data.movie);
    }

    const { id } = useParams();

    useEffect(() => {
        getMovie(id);
    }, [id]);

    const { Title, Paragraph } = Typography;

    return (
        <div style={{ position: 'relative', width: '100vw', margin: 0, height: '500px' }}>
            {movie.yt_trailer_code && (
                <iframe
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${movie.yt_trailer_code}?autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${movie.yt_trailer_code}`}
                    title={movie.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '30vw', maxHeight: '500px', objectFit: 'cover' }}
                ></iframe>
            )}
            <img
                src={movie.large_cover_image}
                alt={movie.title}
                style={{
                    position: 'absolute',
                    top: '15vw',
                    left: '5%',
                    height: '30vw',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    zIndex: 1,
                    boxShadow: '0 4px 8px 0 rgba(9, 23, 211, 0.84), 0 6px 20px 0 rgba(17, 216, 43, 0.73)'
                }}
            />
            <section>
                <section style={{ marginLeft: '30%' }}>
                    <Title level={2}>{movie.title}</Title>
                    <Paragraph>{movie.description_full}</Paragraph>
                    <section style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Tag color="blue">{movie.year}</Tag>
                        <Tag color="green">{movie.rating}</Tag>
                        {movie.genres && movie.genres.map((genre, index) => (
                            <Tag key={index} color="blue">{genre}</Tag>
                        ))}
                    </section>
                </section>
            </section>
            <section style={{ padding: '16px' }}>
                <Title level={3}>Torrents</Title>
                <section
                        style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {movie.torrents && movie.torrents.map((torrent, index) => (
                        <Card key={index} title={torrent.quality} style={{ margin: '8px' }}>
                            <p>{torrent.type}</p>
                            <p>{torrent.size}</p>
                            <a href={torrent.url} target="_blank" rel="noreferrer">Download</a>
                        </Card>
                    ))}
                </section>
            </section>
        </div>
    );
};

export default MovieDetail;