export default function BG({ color }) {
  return (
    <path
      d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z"
      fill={`rgb(${color.join(",")})`}
    />
  );
}
