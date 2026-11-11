import React from "react";
import type { MovieInfoProps } from "../types";
import { ShowList } from "./ShowList";


export class Movie extends React.Component<MovieInfoProps, { isExpanded: boolean }> {
    constructor(props: MovieInfoProps) {
    super(props);
    this.state = { isExpanded: false };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    const { description, ...restProps } = this.props;
    const { isExpanded } = this.state;
    
    return (
      <div className="card shadow-lg border-0 mx-auto my-5 rounded-4 overflow-hidden bg-dark text-light" style={{ maxWidth: "850px", borderColor: "#2d3238" }}>
        <div className="card-body p-4">

          <ShowList {...restProps} />

          {isExpanded && (
            <div className="mt-3 pt-3 border-top">
              <p className="card-text text-secondary" style={{ lineHeight: "1.6" }}>
                {description}
              </p>
            </div>
          )}

          <div className="text-start mt-4">
            <button 
              className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold transition-all"
              onClick={this.handleToggle}
            >
              {isExpanded ? "Сховати деталі ▲" : "Показати деталі ▼"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}