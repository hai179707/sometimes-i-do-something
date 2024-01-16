import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data";
import Container from "./Container";
import Project from "./Project";

function Main() {
  let { search } = useLocation();

  const proj = useMemo(
    () =>
      search
        ? projects.filter((project) =>
            project.tags.some(
              (tag) => tag.toUpperCase() === search.split("?")[1]?.toUpperCase()
            )
          )
        : projects,
    [search]
  );

  return (
    <Container>
      <div className="pt-10 pb-12 flex flex-wrap gap-y-8">
        {proj.length ? (
          proj.map((project) => <Project data={project} key={project.id} />)
        ) : (
          <div className="mx-4">
            <p>There's no project here.</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Main;
