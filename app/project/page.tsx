import Card from "../ui/card";

export default function Page() {
  return (
    <div>
      <h1 className="font-semibold text-xl">🚀Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <Card
          title="Project 1"
          image="/images/project.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, veritatis!"
          website="/"
          github="/"
        />
        <Card
          title="Project 2"
          image="/images/project.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, veritatis!"
          website="/"
          github="/"
        />
        <Card
          title="Project 3"
          image="/images/project.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, veritatis!"
          website="/"
          github="/"
        />
      </div>
    </div>
  );
}