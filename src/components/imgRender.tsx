import React from "react";

type ImgProps = {
    src: string;
};

export class ImgRender extends React.Component<ImgProps> {
    render() {
        return (
            <div className="mb-4 text-center position-relative overflow-hidden shadow-sm rounded-4">
                <img 
                    src={this.props.src} 
                    alt="Movie Poster"
                    className="w-100"
                    style={{ 
                        height: "420px",
                        objectFit: "cover",
                        objectPosition: "center 40%"
                    }}
                />
            </div>
        );
    }
}