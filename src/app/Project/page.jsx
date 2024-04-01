"use client"

import { Container, Text, Image, Spacer, Card } from '@nextui-org/react';

const projet = {
  nom: "Nom du Projet",
  description: "Une description détaillée du projet ici. Parle de l'objectif, des technologies utilisées, des défis rencontrés et de tout autre détail pertinent qui donne une vue d'ensemble du projet.",
  image: "url_de_l_image_principale_du_projet",
  // Ajouter plus de détails si nécessaire
};

const Page = () => {
return (
  <Container>
      <Text h1>{projet.nom}</Text>
      <Spacer y={1} />
      <Image
        src={projet.image}
        alt={projet.nom}
        objectFit="cover"
        width="100%"
        height="40vh"
        // Pour une meilleure accessibilité, envisage de donner une description plus détaillée dans 'alt'
      />
      <Spacer y={1} />
      <Card>
        <Text h3>Description</Text>
        <Text>{projet.description}</Text>
      </Card>
      {/* Ajoute ici plus de sections ou de composants pour d'autres détails du projet */}
    </Container>
  )
}


export default Page