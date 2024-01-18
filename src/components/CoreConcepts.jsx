import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept
            key={concept.id}
            title={concept.title}
            description={concept.description}
            img={concept.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
