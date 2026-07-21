export interface Certificate {
  /** Path relative to /public */
  src: string;
  /** Accessible description of the certificate (used for alt text) */
  alt: string;
}

const certificates: Certificate[] = [
  {
    src: "/certificates/level_2_certificate.png",
    alt: "Level 2 Certificate — Programming Hero Web Development Course",
  },
  // Add more certificates here. Each object only needs `src` and `alt`.
];

export default certificates;
