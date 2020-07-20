import React from "react";
import Layout from "@theme/Layout";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";
// import { IntegrationPage } from "../components/Integration";

const translation = {
  readMore: "Doc",
  buy: "Acheter",
  title: "Intégrations",
  noIntegrationsFound: "Aucunes intégrations trouvées",
};

function Home() {
  return (
    <Layout
      title="Integrations"
      description="Tous les périphériques compatibles avec Gladys."
    >
      <main>
        <IntegrationPage
          integrations={integrations}
          lang="fr"
          translation={translation}
        />
      </main>
    </Layout>
  );
}

export default Home;
