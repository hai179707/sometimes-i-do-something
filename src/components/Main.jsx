import Container from "./Container";
import Project from "./Project";
import { projects } from "../data";
import { useLocation } from "react-router-dom";

function Main() {
  let { search } = useLocation();
  return (
    <Container>
      <div className="pt-10 pb-12 flex flex-wrap gap-y-8">
        {(search
          ? projects.filter((project) =>
              project.tags.some(
                (tag) =>
                  tag.toUpperCase() === search.split("?")[1]?.toUpperCase()
              )
            )
          : projects
        ).map((project) => (
          <Project data={project} key={project.id} />
        ))}
      </div>
    </Container>
  );
}

export default Main;
