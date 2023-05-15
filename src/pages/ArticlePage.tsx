import { useParams } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import { ArticleContext } from '../ArticleContext';
import Container from '@mui/material/Container';
import {useContext} from "react";

function ArticlePage() {
    const { id } = useParams();
    const articles = useContext(ArticleContext);

    const article = articles.find(article => article.id === Number(id));

    if (!article) {
        return <div>Article not found!</div>
    }

    return (
        <Container>
            <ArticleDetail article={article} />
        </Container>
    );
}

export default ArticlePage;
