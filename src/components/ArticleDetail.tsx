import React from 'react';
import Typography from '@mui/material/Typography';
import { Article } from '../models/Article';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ArticleDetailProps {
    article: Article;
}

function ArticleDetail({ article }: ArticleDetailProps) {
    return (
        <Card sx={{ maxWidth: 800, bgcolor: 'white', borderRadius: 2, mt: 4, mb: 4 }}>
            <CardMedia
                component="img"
                height="300"
                image={article.image}
                alt={article.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" color="text.primary">
                    {article.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {article.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ArticleDetail;
