import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "YouTube",
  //     },
  //     author: null,
  //     title:
  //       "Buffalo Bills vs. Los Angeles Chargers | 2023 Week 16 Game Highlights - NFL",
  //     description:
  //       "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
  //     url: "https://www.youtube.com/watch?v=vqiGrrmpL34",
  //     urlToImage: "https://i.ytimg.com/vi/vqiGrrmpL34/maxresdefault.jpg",
  //     publishedAt: "2023-12-24T04:12:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NBC Southern California",
  //     },
  //     author: "Corinne Heller | E!",
  //     title:
  //       "Bobbie Jean Carter, sister of Nick and Aaron Carter, dead at 41 - NBC Southern California",
  //     description:
  //       "Nick Carter’s sister Bobbie Jean Carter has died at age 41 more than a year after the death of their brother Aaron Carter.",
  //     url: "http://www.nbclosangeles.com/entertainment/entertainment-news/bobbie-jean-carter-sister-of-nick-and-aaron-carter-dead-at-41/3297367/",
  //     urlToImage:
  //       "https://media.nbclosangeles.com/2023/12/GettyImages-72054687-e1703377042571.jpg?quality=85&strip=all&resize=1200%2C675",
  //     publishedAt: "2023-12-24T03:58:06Z",
  //     content:
  //       'Originally appeared on E! Online\r\nNick Carter\'s family is navigating another tragic loss of a loved one.\r\nThe "Backstreet Boys" member\'s sister Bobbie Jean "B.J." Carter has died at age 41, more than… [+1877 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NBC Southern California",
  //     },
  //     author: "Corinne Heller | E!",
  //     title:
  //       "Bobbie Jean Carter, sister of Nick and Aaron Carter, dead at 41 - NBC Southern California",
  //     description:
  //       "Nick Carter’s sister Bobbie Jean Carter has died at age 41 more than a year after the death of their brother Aaron Carter.",
  //     url: "http://www.nbclosangeles.com/entertainment/entertainment-news/bobbie-jean-carter-sister-of-nick-and-aaron-carter-dead-at-41/3297367/",
  //     urlToImage:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WJdcjqivkUXm-a043uFLbrndoQZ9e_H06Q_we58AEozPsljkI6dIIQR9xpFJXN1ytUg&usqp=CAU",
  //     publishedAt: "2023-12-24T03:58:06Z",
  //     content:
  //       'Originally appeared on E! Online\r\nNick Carter\'s family is navigating another tragic loss of a loved one.\r\nThe "Backstreet Boys" member\'s sister Bobbie Jean "B.J." Carter has died at age 41, more than… [+1877 chars]',
  //   },
  // ];

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=${props.apiKey}&${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  // async componentDidMount() {
  //   // let url =
  //   //   `https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=3f9fe9422aa641a7bc8edc5dc38bf250&${props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false,
  //   // });
  //   this.updateNews();
  // }

  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=3f9fe9422aa641a7bc8edc5dc38bf250&page=${
    //   this.state.page - 1
    // }&${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    // this.setState({ page: this.state.page - 1 });
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    if (Math.ceil(totalResults / props.pageSize) < page + 1) {
    } else {
      // let url = `
      // https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=3f9fe9422aa641a7bc8edc5dc38bf250&page=${
      //   this.state.page + 1
      // }&${props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   articles: parsedData.articles,
      //   page: this.state.page + 1,
      //   loading: false,
      // });
      // this.setState({ page: this.state.page - 1 });
      setPage(page - 1);
      updateNews();
    }
  };

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    setPage(page + 1);
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=3f9fe9422aa641a7bc8edc5dc38bf250&${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  };

  return (
    <>
      <h3
        className="my-3 text-center"
        style={{ color: "grey", paddingTop: "66px" }}
      >
        Top Headlines
      </h3>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between mb-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.handleNextClick}
            disabled={
              Math.ceil(this.state.totalResults / props.pageSize) <
              this.state.page + 1
            }
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
