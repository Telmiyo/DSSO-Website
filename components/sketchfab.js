export default function SketchfabCard({ sketchfabId, title }) {
  return (
      <iframe
        frameBorder="0"
        allowFullScreen
        mozallowFullscreen="true"
        webkitallowfullScreen="true"
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
