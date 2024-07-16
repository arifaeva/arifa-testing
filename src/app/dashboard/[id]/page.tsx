export default function Page({ params }: { params: { id: string } }) {
  return <div>Dynamic Page: {params.id}</div>;
}
