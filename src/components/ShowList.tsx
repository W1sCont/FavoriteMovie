import React from "react";
import type { MovieInfoProps } from "../types";
import { ImgRender } from "./imgRender";

export class ShowList extends React.Component<MovieInfoProps> {
    render() {
        const {
            title,
            year,
            genre,
            director,
            producer,
            screenwriter,
            studio,
            time,
            img
        } = this.props;

        return (
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2 border-bottom border-secondary border-opacity-25 pb-3">
                    <h1 className="fw-bold fs-2 text-white mb-0">
                        {title} <span className="text-secondary fs-4 fw-light">({year})</span>
                    </h1>
                    <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fs-6 fw-semibold">
                        🎬 {genre}
                    </span>
                </div>

                <ImgRender {...img} />

                <div className="row g-3 text-light bg-black bg-opacity-25 p-4 rounded-4 mb-3 border border-secondary border-opacity-10">
                    <div className="col-md-6">
                        <p className="mb-2 fs-6"><strong>Режисер:</strong> <span className="text-secondary">{director}</span></p>
                        <p className="mb-2 fs-6"><strong>Сценарист:</strong> <span className="text-secondary">{screenwriter}</span></p>
                        <p className="mb-0 fs-6"><strong>Тривалість:</strong> <span className="text-secondary">{time}</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-2 fs-6"><strong>Продюсер:</strong> <span className="text-secondary">{producer}</span></p>
                        <p className="mb-0 fs-6"><strong>Кіностудія:</strong> <span className="text-secondary">{studio}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}