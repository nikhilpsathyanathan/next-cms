import { getPage, getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  const data = await getProjects();

  const page = await getPage();

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Projects</div>
      <div>
        {data.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div>
      <div>{JSON.stringify(page, null, 2)}</div>
    </main>
  );
}
