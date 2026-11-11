export type MovieInfoProps = {
    title: string;
    year: number;
    genre: string;
    director: string;
    producer: string;
    screenwriter: string;
    studio: string;
    time: string;
    description?: string;
    img: imgSourseProp;
}

export type imgSourseProp = {
  src: string;
}