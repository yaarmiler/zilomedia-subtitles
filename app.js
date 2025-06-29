// --- מערכים להפרדה לסרטים וסדרות לפי קטגוריה ---
// מלא כאן את התכנים שלך:
const dubbedMovies = [

];
const subtitledMovies = [
  // ...
];
const israeliMovies = [
  // ...
];
// סדרות
const dubbedSeries = [
id: "jurassic_world_camp_cretaceous",
  title: "עולם היורה: מחנה הקרטיקון",
  year: 2020,
  img: "https://i.imgur.com/1srs35S.jpeg",
  episodesTotal: 37,
  isSeries: true,
  seasons: [
    {
      name: "עונה 1",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165562%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A41.mp4%3Fhash%3DAgAD3w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169343%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A42.mp4%3Fhash%3DAgAD4A"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169363%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A43.mp4%3Fhash%3DAgAD4g"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169371%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A44.mp4%3Fhash%3DAgAD4Q"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169375%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A45.mp4%3Fhash%3DAgAD4w"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169431%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A46.mp4%3Fhash%3DAgAD5A"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169437%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A47.mp4%3Fhash%3DAgAD5g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169439%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A48.mp4%3Fhash%3DAgAD5Q"}
      ]
    },
    {
      name: "עונה 2",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169845%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A41.mp4%3Fhash%3DAgAD5w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169864%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A42.mp4%3Fhash%3DAgAD6A"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169866%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A43.mp4%3Fhash%3DAgAD6Q"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169868%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A44.mp4%3Fhash%3DAgAD6g"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169870%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A45.mp4%3Fhash%3DAgAD7A"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169872%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A46.mp4%3Fhash%3DAgAD7Q"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169874%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A47.mp4%3Fhash%3DAgAD7g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169878%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A48.mp4%3Fhash%3DAgAD6w"}
      ]
    },
    {
      name: "עונה 3",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169912%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A41.mp4%3Fhash%3DAgAD7w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169913%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A42.mp4%3Fhash%3DAgAD8Q"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169920%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A43.mp4%3Fhash%3DAgAD8A"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169921%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A44.mp4%3Fhash%3DAgAD8g"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169924%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A45.mp4%3Fhash%3DAgAD8w"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169925%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A46.mp4%3Fhash%3DAgAD9A"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169928%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A47.mp4%3Fhash%3DAgAD9g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169929%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A48.mp4%3Fhash%3DAgAD9Q"},
        {title: "פרק 9", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169931%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A49.mp4%3Fhash%3DAgAD-A"},
        {title: "פרק 10", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169934%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A410.mp4%3Fhash%3DAgAD9w"}
      ]
    },
    {
      name: "עונה 4",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169944%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A41.mp4%3Fhash%3DAgAD_A"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169945%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A42.mp4%3Fhash%3DAgAD-w"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169957%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A43.mp4%3Fhash%3DAgAD-g"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169952%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A44.mp4%3Fhash%3DAgAD-Q"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169948%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A45.mp4%3Fhash%3DAgAEDw"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169949%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A46.mp4%3Fhash%3DAgADAQ"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169953%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A47.mp4%3Fhash%3DAgADAg"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169955%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A48.mp4%3Fhash%3DAgADAw"},
        {title: "פרק 9", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169956%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A49.mp4%3Fhash%3DAgADBA"},
        {title: "פרק 10", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169960%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A410.mp4%3Fhash%3DAgADBg"},
        {title: "פרק 11", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169963%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A411.mp4%3Fhash%3DAgADBQ"}
       ]
     }
   ]
 }
];
const subtitledSeries = [
  // ...
];
const israeliSeries = [
  // ...
];
// ערוצים חיים
const channels = [
  // דוג': {title:"ערוץ 12", img:"...", src:"..."}
];

// --- מיון לפי א"ב ---
let fullDubbedMovies = [...dubbedMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullSubtitledMovies = [...subtitledMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullIsraeliMovies = [...israeliMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullDubbedSeries = [...dubbedSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullSubtitledSeries = [...subtitledSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullIsraeliSeries = [...israeliSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));

// --- רנדרינג אוניברסלי לסרטים/סדרות/ערוצים ---
function renderContent(list, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach((item) => {
    const div = document.createElement("div");
    div.className = type;
    div.tabIndex = 0;
    if (type === "channel") {
      div.innerHTML = `<div class="image-container"><img src="${item.img}" alt="${item.title}" /></div>
        <p>${item.title}</p>`;
      div.onclick = () => playChannel(item);
    } else {
      div.innerHTML = `
        <div class="image-container">
          <img src="${item.img}" alt="${item.title}" />
          ${item.isSeries && item.episodesTotal ? `<span class="episodes-badge">${item.episodesTotal}</span>` : ""}
        </div>
        <p>${item.title}</p>
        <div class="year">${item.year}</div>
      `;
      div.onclick = () => {
        if (item.isSeries && item.seasons) {
          openSeriesModal(item);
        } else if (item.src) {
          playMovie(item);
        }
      };
    }
    container.appendChild(div);
  });
}

// --- רנדרינג ראשוני של כל הקטגוריות ---
function renderAll() {
  renderContent(fullDubbedMovies, "movies-dubbed-list", "movie");
  renderContent(fullSubtitledMovies, "movies-subtitled-list", "movie");
  renderContent(fullIsraeliMovies, "movies-israeli-list", "movie");
  renderContent(fullDubbedSeries, "series-dubbed-list", "series");
  renderContent(fullSubtitledSeries, "series-subtitled-list", "series");
  renderContent(fullIsraeliSeries, "series-israeli-list", "series");
  renderContent(channels, "channels-list", "channel");
}

// --- חיפוש אוניברסלי ---
document.getElementById("search").addEventListener("input", function() {
  const val = this.value.trim().toLowerCase();
  function filter(list) {
    return list.filter(m => m.title.toLowerCase().includes(val));
  }
  renderContent(val ? filter(fullDubbedMovies) : fullDubbedMovies, "movies-dubbed-list", "movie");
  renderContent(val ? filter(fullSubtitledMovies) : fullSubtitledMovies, "movies-subtitled-list", "movie");
  renderContent(val ? filter(fullIsraeliMovies) : fullIsraeliMovies, "movies-israeli-list", "movie");
  renderContent(val ? filter(fullDubbedSeries) : fullDubbedSeries, "series-dubbed-list", "series");
  renderContent(val ? filter(fullSubtitledSeries) : fullSubtitledSeries, "series-subtitled-list", "series");
  renderContent(val ? filter(fullIsraeliSeries) : fullIsraeliSeries, "series-israeli-list", "series");
  renderContent(val ? filter(channels) : channels, "channels-list", "channel");
});

// --- ניווט קטגוריות ---
document.querySelectorAll('#main-nav button').forEach(btn => {
  btn.onclick = function() {
    document.querySelectorAll('#main-nav button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.category-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(this.dataset.section).classList.add('active');
  };
});

// --- אתחול ראשוני ---
document.addEventListener('DOMContentLoaded', function() {
  renderAll();
  document.querySelector('#main-nav button').click();
  var loaderExitBtn = document.getElementById('loader-exit-btn');
  if (loaderExitBtn) loaderExitBtn.onclick = closePlayer;
});

// --- נגן ווידאו, סדרות, כתוביות, שמירת התקדמות ---
// (הקוד שלך כפי שהוא, כמעט ללא שינוי!)

// --- סדרות (מודל עונות ופרקים) ---
const modalBg = document.getElementById('series-modal-bg');
const modal = document.getElementById('series-modal');
const modalTitle = document.getElementById('series-title');
const modalSeasonRow = modal.querySelector('.season-row');
const modalEpisodesList = modal.querySelector('.episodes-list');
let modalSeriesData = null;
let modalSeasonIdx = 0;

let currentSeriesEpisodes = null;
let currentEpisodeIdx = null;

function openSeriesModal(seriesData){
  modalSeriesData = seriesData;
  modalSeasonIdx = 0;
  modalTitle.textContent = seriesData.title;
  renderSeasons(seriesData);
  renderEpisodes(seriesData, 0);
  modalBg.classList.add("active");
}
function closeSeriesModal(){
  modalBg.classList.remove("active");
  modalSeriesData = null;
  modalSeasonIdx = 0;
}
function renderSeasons(seriesData){
  modalSeasonRow.innerHTML = "";
  seriesData.seasons.forEach((season, i) => {
    const btn = document.createElement("button");
    btn.className = "season-btn" + (i===modalSeasonIdx ? " selected" : "");
    btn.textContent = season.name || `עונה ${i+1}`;
    btn.tabIndex = 0;
    btn.onclick = ()=>{
      modalSeasonIdx = i;
      renderSeasons(seriesData);
      renderEpisodes(seriesData, i);
    };
    modalSeasonRow.appendChild(btn);
  });
}
function renderEpisodes(seriesData, seasonIdx){
  modalEpisodesList.innerHTML = "";
  const season = seriesData.seasons[seasonIdx];
  currentSeriesEpisodes = season.episodes.map((ep, epIdx) => ({
    ...ep,
    id: seriesData.id + "_s" + (seasonIdx+1) + "_e" + (epIdx+1),
    title: `${seriesData.title} - ${season.name} - ${ep.title}`,
    src: ep.src,
    img: seriesData.img,
    year: seriesData.year,
    subtitles: ep.subtitles || []
  }));
  season.episodes.forEach((ep, epIdx) => {
    const btn = document.createElement("button");
    btn.className = "episode-btn";
    btn.textContent = ep.title || `פרק ${epIdx+1}`;
    btn.tabIndex = 0;
    btn.onclick = ()=>{
      closeSeriesModal();
      if (ep.src) {
        currentEpisodeIdx = epIdx;
        playMovie(currentSeriesEpisodes[epIdx]);
        updateEpisodeNavButtons();
      } else {
        alert("קישור לפרק לא זמין.");
      }
    };
    modalEpisodesList.appendChild(btn);
  });
}
modalBg.addEventListener("mousedown", e=>{
  if(e.target===modalBg) closeSeriesModal();
});

// --- נגן וידאו מתקדם ---
const playerContainer = document.getElementById("player-container");
const videoPlayer = document.getElementById("video-player");
const loader = document.getElementById("loader");
const customControls = document.getElementById("custom-controls");
const nowPlayingTitle = document.getElementById("now-playing-title");
const playpauseBtn = document.getElementById("playpause-btn");
const playpauseIcon = document.getElementById("playpause-icon");
const rewindBtn = document.getElementById("rewind-btn");
const forwardBtn = document.getElementById("forward-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeSpan = document.getElementById("current-time");
const durationSpan = document.getElementById("duration");
const exitBtn = document.getElementById("exit-btn");
const prevEpisodeBtn = document.getElementById('prev-episode-btn');
const nextEpisodeBtn = document.getElementById('next-episode-btn');

function updateEpisodeNavButtons() {
  if (currentSeriesEpisodes && currentSeriesEpisodes.length > 1 && currentEpisodeIdx !== null) {
    prevEpisodeBtn.style.display = (currentEpisodeIdx > 0) ? 'inline-flex' : 'none';
    nextEpisodeBtn.style.display = (currentEpisodeIdx < currentSeriesEpisodes.length - 1) ? 'inline-flex' : 'none';
  } else {
    prevEpisodeBtn.style.display = 'none';
    nextEpisodeBtn.style.display = 'none';
  }
}
prevEpisodeBtn.onclick = function() {
  if (currentSeriesEpisodes && currentEpisodeIdx > 0) {
    currentEpisodeIdx--;
    playMovie(currentSeriesEpisodes[currentEpisodeIdx]);
    updateEpisodeNavButtons();
  }
};
nextEpisodeBtn.onclick = function() {
  if (currentSeriesEpisodes && currentEpisodeIdx < currentSeriesEpisodes.length - 1) {
    currentEpisodeIdx++;
    playMovie(currentSeriesEpisodes[currentEpisodeIdx]);
    updateEpisodeNavButtons();
  }
};

let currentMovie = null;
let seeking = false;
let videoLoaded = false;
let hideControlsTimer = null;
let playerIsOpen = false;

function showVideoAndControls() {
  if (videoLoaded) return;
  loader.style.display = "none";
  videoPlayer.style.display = "block";
  customControls.style.display = "flex";
  customControls.classList.remove("hide");
  nowPlayingTitle.style.display = "block";
  updatePlayPauseIcon();
  updateProgressBar();
  durationSpan.textContent = formatTime(videoPlayer.duration);
  videoLoaded = true;
  videoPlayer.play();
  startHideControlsTimer();
}
["canplay","loadeddata","playing","loadedmetadata"].forEach(event=>{
  videoPlayer.addEventListener(event, showVideoAndControls);
});
async function playMovie(movie) {
  if (!movie || !movie.src) {
    alert("לא נמצא קישור וידאו. אנא נסה סרט אחר.");
    return;
  }
  addSubtitlesToVideo(movie.subtitles);
  updateSubtitleMenu();
  currentMovie = movie;
  if (currentSeriesEpisodes && movie && movie.id) {
    const idx = currentSeriesEpisodes.findIndex(ep => ep.id === movie.id);
    if (idx !== -1) currentEpisodeIdx = idx;
  } else {
    currentSeriesEpisodes = null;
    currentEpisodeIdx = null;
  }
  playerContainer.style.display = "flex";
  loader.style.display = "block";
  videoPlayer.style.display = "none";
  customControls.style.display = "none";
  customControls.classList.remove("hide");
  nowPlayingTitle.textContent = movie.title || '';
  videoPlayer.src = "";
  videoPlayer.removeAttribute('controls');
  videoLoaded = false;
  document.body.style.overflow = "hidden";
  playerIsOpen = true;
  setTimeout(async () => {
    videoPlayer.src = movie.src;
    videoPlayer.load();
    videoPlayer.focus();
    videoPlayer.onloadedmetadata = async function() {
      updateSubtitleMenu();
      let lastPos = await getProgressForUser(movie.id);
      if ((!lastPos || isNaN(lastPos)) && localStorage.getItem("zilo_lastpos_" + movie.id)) {
        lastPos = localStorage.getItem("zilo_lastpos_" + movie.id);
      }
      if (lastPos && !isNaN(lastPos) && videoPlayer.duration > 0) {
        if (parseInt(lastPos,10) < videoPlayer.duration-10) {
          videoPlayer.currentTime = parseInt(lastPos, 10);
        }
      }
    };
  }, 50);
  updateEpisodeNavButtons();
}
function playChannel(channel) {
  playMovie({ ...channel, id: channel.title, title: channel.title, isSeries: false, src: channel.src, img: channel.img, year: "" });
}
function closePlayer() {
  playerContainer.style.display = "none";
  videoPlayer.pause();
  videoPlayer.src = "";
  document.body.style.overflow = "";
  customControls.style.display = "none";
  loader.style.display = "none";
  videoPlayer.style.display = "none";
  videoLoaded = false;
  playerIsOpen = false;
  nowPlayingTitle.style.display = "none";
  clearTimeout(hideControlsTimer);
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  currentSeriesEpisodes = null;
  currentEpisodeIdx = null;
  updateEpisodeNavButtons();
}
playpauseBtn.onclick = function() {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
  updatePlayPauseIcon();
  showControls();
};
rewindBtn.onclick = function() {
  videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
  showControls();
};
forwardBtn.onclick = function() {
  videoPlayer.currentTime = Math.min(videoPlayer.duration || 0, videoPlayer.currentTime + 10);
  showControls();
};
fullscreenBtn.onclick = function() {
  if (!document.fullscreenElement) {
    if (playerContainer.requestFullscreen) playerContainer.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
  showControls();
};
function updateProgressBar() {
  if (videoPlayer.duration && !seeking) {
    progressBar.value = (videoPlayer.currentTime / videoPlayer.duration) * 100 || 0;
    currentTimeSpan.textContent = formatTime(videoPlayer.currentTime);
    durationSpan.textContent = formatTime(videoPlayer.duration);
  }
}
videoPlayer.addEventListener("timeupdate", updateProgressBar);
videoPlayer.addEventListener("loadedmetadata", function() {
  durationSpan.textContent = formatTime(videoPlayer.duration);
  updateProgressBar();
});
progressBar.addEventListener("input", function() {
  seeking = true;
  if (videoPlayer.duration) {
    const seekTo = (progressBar.value / 100) * videoPlayer.duration;
    currentTimeSpan.textContent = formatTime(seekTo);
  }
});
progressBar.addEventListener("change", function() {
  if (videoPlayer.duration) {
    videoPlayer.currentTime = (progressBar.value / 100) * videoPlayer.duration;
  }
  seeking = false;
});
progressBar.addEventListener("mousedown", function() { seeking = true; });
progressBar.addEventListener("mouseup", function() { seeking = false; showControls(); });
function formatTime(seconds) {
  seconds = Math.floor(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  } else {
    return `${m}:${s.toString().padStart(2,'0')}`;
  }
}
function updatePlayPauseIcon() {
  if (videoPlayer.paused || videoPlayer.ended) {
    playpauseIcon.innerHTML = '<polygon points="6,4 26,16 6,28" fill="#00BFFF"/>';
  } else {
    playpauseIcon.innerHTML =
      '<rect x="7" y="4" width="5" height="24" rx="2" fill="#00BFFF"/>' +
      '<rect x="18" y="4" width="5" height="24" rx="2" fill="#00BFFF"/>';
  }
}
videoPlayer.onplay = updatePlayPauseIcon;
videoPlayer.onpause = updatePlayPauseIcon;
function showControls() {
  customControls.classList.remove("hide");
  nowPlayingTitle.style.display = "block";
  playerContainer.classList.remove("hide-cursor");
  startHideControlsTimer();
}
function startHideControlsTimer() {
  clearTimeout(hideControlsTimer);
  hideControlsTimer = setTimeout(() => {
    customControls.classList.add("hide");
    nowPlayingTitle.style.display = "none";
    playerContainer.classList.add("hide-cursor");
  }, 5000);
}
["mousemove","mousedown","keydown","touchstart"].forEach(evt => {
  playerContainer.addEventListener(evt, showControls);
});
videoPlayer.addEventListener("click", showControls);
customControls.addEventListener("mousemove", showControls);

// --- שמירת התקדמות למשתמש ---
function saveProgressForUser(movieId, seconds) {
  const user = firebase.auth().currentUser;
  if (!user) return;
  db.collection("user_progress").doc(user.uid).set({
    [movieId]: seconds
  }, {merge:true})
  .then(() => {
    console.log(`Saved progress for ${movieId}: ${seconds} (user: ${user.uid})`);
  })
  .catch(error => {
    console.error("Error saving progress to Firestore:", error);
  });
}
async function getProgressForUser(movieId) {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  const doc = await db.collection("user_progress").doc(user.uid).get();
  if (doc.exists && doc.data() && doc.data()[movieId] !== undefined) {
    return doc.data()[movieId];
  }
  return null;
}
exitBtn.onclick = function() {
  if (currentMovie && currentMovie.id && videoPlayer.duration) {
    const pos = Math.floor(videoPlayer.currentTime);
    localStorage.setItem("zilo_lastpos_" + currentMovie.id, pos);
    if (firebase.auth().currentUser) {
      saveProgressForUser(currentMovie.id, pos);
    }
  }
  closePlayer();
};
window.addEventListener('beforeunload', function() {
  if (currentMovie && currentMovie.id && videoPlayer.duration) {
    const pos = Math.floor(videoPlayer.currentTime);
    localStorage.setItem("zilo_lastpos_" + currentMovie.id, pos);
    if (firebase.auth().currentUser) {
      saveProgressForUser(currentMovie.id, pos);
    }
  }
});
videoPlayer.addEventListener('ended', function() {
  if (currentMovie && currentMovie.id) {
    localStorage.removeItem("zilo_lastpos_" + currentMovie.id);
  }
});

// --- כתוביות (כולל תפריט בחירה) ---
function clearSubtitles() {
  var videoPlayer = document.getElementById('video-player');
  Array.from(videoPlayer.querySelectorAll("track")).forEach(track => track.remove());
}
function addSubtitlesToVideo(subtitles) {
  var videoPlayer = document.getElementById('video-player');
  clearSubtitles();
  if (!subtitles || !Array.isArray(subtitles) || !subtitles.length) return;
  subtitles.forEach(function(sub, idx) {
    var track = document.createElement('track');
    track.kind = "subtitles";
    track.label = sub.label || sub.lang || ('כתוביות ' + (idx+1));
    track.srclang = sub.lang || "";
    track.src = sub.src;
    track.default = false;
    videoPlayer.appendChild(track);
  });
  setTimeout(updateSubtitleMenu, 200);
}
function updateSubtitleMenu() {
  const videoPlayer = document.getElementById('video-player');
  const subtitleBtn = document.getElementById('subtitle-btn');
  const subtitleMenu = document.getElementById('subtitle-menu');
  subtitleMenu.innerHTML = '';
  const tracks = Array.from(videoPlayer.textTracks);
  const offBtn = document.createElement('button');
  offBtn.textContent = 'ללא כתוביות';
  offBtn.onclick = function() {
    tracks.forEach(track=>track.mode="disabled");
    updateSubtitleMenu();
    subtitleMenu.style.display = "none";
  };
  if (!tracks.some(track=>track.mode==="showing")) offBtn.className = "selected";
  subtitleMenu.appendChild(offBtn);
  tracks.forEach((track, idx) => {
    const btn = document.createElement('button');
    btn.textContent = track.label || track.language || ('כתוביות '+(idx+1));
    btn.onclick = function() {
      tracks.forEach((t, i) => t.mode = (i===idx) ? "showing" : "disabled");
      updateSubtitleMenu();
      subtitleMenu.style.display = "none";
    };
    if (track.mode === "showing") btn.className = "selected";
    subtitleMenu.appendChild(btn);
  });
}
document.getElementById("subtitle-btn").addEventListener("click", function(e){
  const menu = document.getElementById("subtitle-menu");
  if(menu.style.display==="block") { menu.style.display="none"; return; }
  updateSubtitleMenu();
  menu.style.display="block";
  const rect = this.getBoundingClientRect();
  menu.style.right = (window.innerWidth - rect.right + 10) + "px";
  menu.style.bottom = (window.innerHeight - rect.top + 50) + "px";
});
window.addEventListener("click", function(e){
  if(!e.target.closest("#subtitle-btn") && !e.target.closest("#subtitle-menu")) {
    document.getElementById("subtitle-menu").style.display="none";
  }
});
