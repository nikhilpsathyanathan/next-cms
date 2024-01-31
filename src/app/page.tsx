import { getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  const data = await getProjects();

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Projects</div>

      <div>
        {data.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div>
    </main>
  );
}
