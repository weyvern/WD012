import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import News from './components/News';
import NewsPagination from './components/NewsPagination';

const App = () => {
  const [query, setQuery] = useState('java');
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [selectedArticleId, setSelectedArticleId] = useState();
  const [selectedArticle, setSelectedArticle] = useState();
  const [loading, setLoading] = useState(false);
  const api = 'https://hn.algolia.com/api/v1';

  useEffect(() => {
    const fetchNews = async () => {
      const sanitizedInput = query.replace(/[^\w\d\s.]+/g, '').toLowerCase();
      const encodedURI = encodeURI(
        `${api}/search_by_date?query="${sanitizedInput}"&tags=story${
          page !== 1 ? `&page=${page}` : ''
        }`
      );
      setLoading(true);
      try {
        const res = await axios.get(encodedURI);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setData();
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNews();
    const id = setInterval(() => fetchNews(), 300000);
    return () => clearInterval(id);
  }, [query, page]);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleUrl = `https://hn.algolia.com/api/v1/items/${selectedArticleId}`;
      const res = await axios.get(articleUrl).catch(error => {
        console.log(error.message);
      });
      if (res) {
        setSelectedArticle(res.data);
      }
    };
    fetchArticle();
  }, [selectedArticleId]);
  if (error) return <div>{error}</div>;
  return (
    <Container>
      <Row className='justify-content-center justify-content-lg-end'>Search bar here</Row>
      <Row>
        <Col md={4}>
          {!loading && data ? (
            <Fragment>
              <News data={data} setSelectedArticleId={setSelectedArticleId} />
              <NewsPagination data={data} />
            </Fragment>
          ) : (
            'Loading'
          )}
        </Col>
        <Col md={8}>
          {selectedArticle ? `You selected: ${selectedArticle.title}` : 'Select an article to read'}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
