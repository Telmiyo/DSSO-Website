export default function SketchfabCard({ sketchfabId, title }) {
  return (
      <iframe
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        width="640" 
        height="480"
        src={`https://sketchfab.com/models/${sketchfabId}/embed?ui_theme=dark&dnt=1`}
      ></iframe>
  );
}
