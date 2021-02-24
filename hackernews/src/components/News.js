const News = ({ data: { hits }, setSelectedArticleId }) => {
  return hits.map(({ objectID, title }) => (
    <div key={objectID} onClick={() => setSelectedArticleId(objectID)}>
      {title}
    </div>
  ));
};

export default News;
