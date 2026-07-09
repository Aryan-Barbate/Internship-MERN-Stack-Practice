export default function TurnPage({ id, turned, z, front, back }) {
  return (
    <div
      id={id}
      className={`book-page page-right ${turned ? "turn" : ""}`}
      style={z !== undefined ? { zIndex: z } : undefined}
    >
      {front}
      {back}
    </div>
  );
}
