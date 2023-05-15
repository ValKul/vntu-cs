import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Article } from '../models/Article';
import { Box } from '@mui/system';

interface ArticleCardProps {
    article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Card sx={{ maxWidth: 345, bgcolor: 'white', borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={article.image}
                alt={article.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.summary}
                </Typography>
                <Box component="span">
                    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'black' }}>Read more</Link>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ArticleCard;
