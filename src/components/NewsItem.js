import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span class="badge rounded-pill bg-warning">
            <span class="visually-hidden">{source}</span>
          </span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WJdcjqivkUXm-a043uFLbrndoQZ9e_H06Q_we58AEozPsljkI6dIIQR9xpFJXN1ytUg&usqp=CAU"
          }
          className="card-img-top"
          alt="No Image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text">
            <small className="text-body-secondary text-danger">
              By {!author ? "unknown" : author} on {date}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
