interface PostIdProps {
  params: {
    id: number;
  };
}
export default async function PostId({ params }: PostIdProps) {
  const { id } = await params;

  return <h1 className="text-3xl font-bold underline">This is Post {id}</h1>;
}
