import React from "react"
import PropTypes from "prop-types"
import { Card, Rate, Tag, Typography, Button, Space } from "antd"
import { PlayCircleOutlined, PlusOutlined } from "@ant-design/icons"

const { Meta } = Card
const { Text } = Typography

const MovieCard = ({ id, loading, key, title, year, rating, genres, large_cover_image, yt_trailer_code }) => {
    const handleReadMore = () => {
        window.location.href = `/intern-react-movie-yrrah/movies/${id}`;
    };

    return (
        <Card key={key}
            loading={loading}
            hoverable={true}
            style={{ height: "100%" }}
            cover={
                <img
                    alt={`${title} poster`}
                    src={large_cover_image}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            }
            actions={[
                <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
                    <Button key="watch-trailer" icon={<PlayCircleOutlined />} onClick={() => window.open("https://www.youtube.com/watch?v=" + yt_trailer_code, "_blank")}>
                    Watch Trailer
                    </Button>
                    <Button key="read-more" icon={<PlusOutlined />} onClick={handleReadMore}>
                        Read More
                    </Button>
                </section>
            ]}
        >
            <Meta
                title={
                    <Space>
                        {title}
                        <Text type="secondary">({year})</Text>
                    </Space>
                }
                description={
                    <div>
                        <section style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Rate allowHalf defaultValue={rating / 2} disabled />
                            <Text strong>{rating.toFixed(1)}</Text>
                        </section>
                        <Space style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {genres.map((genre, index) => (
                                <Tag key={index} color="blue">
                                    {genre}
                                </Tag>
                            ))}
                        </Space>
                    </div>
                }
            />
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    large_cover_image: PropTypes.string.isRequired,
    yt_trailer_code: PropTypes.string.isRequired
}

export default MovieCard



