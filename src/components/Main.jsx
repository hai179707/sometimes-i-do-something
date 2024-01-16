import { useLocation } from "react-router-dom";
import { projects } from "../data";
import Container from "./Container";
import Project from "./Project";

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
