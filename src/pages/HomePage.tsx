import React, {useContext} from 'react';
import ArticleCard from '../components/ArticleCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ArticleContext} from "../ArticleContext";
import Box from '@mui/material/Box';

function HomePage() {
    const articles = useContext(ArticleContext);

    return (
        <Container>
            <Box mt={4} mb={4}>
                <Typography variant="h3" component="h1" gutterBottom align="center">
                    Welcome to our CS GO blog
                </Typography>
                <Typography variant="h5" gutterBottom align="center">
                    Here you will find interesting articles about CS GO.
                </Typography>
            </Box>
            <Box mt={5}>
                <Grid container spacing={3}>
                    {articles.map((article) => (
                        <Grid item xs={12} sm={6} md={4} key={article.id}>
                            <ArticleCard article={article} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default HomePage;
