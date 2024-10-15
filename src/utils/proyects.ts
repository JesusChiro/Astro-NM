import { type Boxer } from "@/types/Gallery";

const addGetters = (boxers: Boxer[]): Boxer[] => {
  return boxers.map((b) => ({
    ...b,
    get age() {
      return (
        new Date(
          new Date().getTime() - this.birthDate.getTime()
        ).getFullYear() - 1970
      );
    },
    // El enemigo de mi enemigo es mi amigo
    get allies() {
      return boxers
        .filter(
          (ally) =>
            (Array.isArray(ally.versus)
              ? ally.versus.every((opponent) => this.versus.includes(opponent))
              : false) && ally.id !== this.id
        )
        .map((ally) => ally.id);
    },
  }));
};

export const PROYECTS = [
  {
    id: "Bandejas-pasacables",
    title: "Instalacion de Bandejas",
    text: "Esta Solución que NMT ",
    customer: "vulco",
  },
  {
    id: "Ensamblaje-de-servidores",
    title: "Ensamblaje de Servidores",
    text: "Ofrecemos a nuestros clientes un servicio profesional de protección y extinción de incendios adecuado al entorno que se requiere proteger",
    customer: "incor",
  },
  {
    id: "Instalacion-gabinete-rittal",
    title: "Instalacion de Gabinete RITTAL",
    text: "P",
    customer: "pj",
  },
  {
    id: "Instalacion-de-camaras",
    title: "Instalación de Camaras",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Ordenamiento-de-gabinetes",
    title: "Ordenamiento de Gabinetes",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Pozo-a-tierra",
    title: "Pozo a Tierra",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "vulco",
  },
  {
    id: "Trabajos-en-altura",
    title: "Trabajos en Altura",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "vulco",
  },
  {
    id: "Bandejas-pasacables",
    title: "Instalacion de Bandejas",
    text: "Esta Solución que NMT ",
    customer: "vulco",
  },
  {
    id: "Ensamblaje-de-servidores",
    title: "Ensamblaje de Servidores",
    text: "Ofrecemos a nuestros clientes un servicio profesional de protección y extinción de incendios adecuado al entorno que se requiere proteger",
    customer: "incor",
  },
  {
    id: "Instalacion-gabinete-rittal",
    title: "Instalacion de Gabinete RITTAL",
    text: "P",
    customer: "pj",
  },
  {
    id: "Instalacion-de-camaras",
    title: "Instalación de Camaras",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Ordenamiento-de-gabinetes",
    title: "Ordenamiento de Gabinetes",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Pozo-a-tierra",
    title: "Pozo a Tierra",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "vulco",
  },
  {
    id: "Trabajos-en-altura",
    title: "Trabajos en Altura",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "vulco",
  },
  {
    id: "Bandejas-pasacables",
    title: "Instalacion de Bandejas",
    text: "Esta Solución que NMT ",
    customer: "vulco",
  },
  {
    id: "Ensamblaje-de-servidores",
    title: "Ensamblaje de Servidores",
    text: "Ofrecemos a nuestros clientes un servicio profesional de protección y extinción de incendios adecuado al entorno que se requiere proteger",
    customer: "incor",
  },
  {
    id: "Instalacion-gabinete-rittal",
    title: "Instalacion de Gabinete RITTAL",
    text: "P",
    customer: "pj",
  },
  {
    id: "Instalacion-de-camaras",
    title: "Instalación de Camaras",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Ordenamiento-de-gabinetes",
    title: "Ordenamiento de Gabinetes",
    text: "Brindamos el servicio de venta e instalacion de equipos de Computo para su empresa o negocio con su respectivo soporte 24/7.",
    customer: "unp",
  },
  {
    id: "Pozo-a-tierra",
    title: "Pozo a Tierra",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "vulco",
  },
  {
    id: "Trabajos-en-altura",
    title: "Trabajos en Altura",
    text: "Ofrecemos al cliente una gama selecta de equipos de redes de acuerdo a las necesidades de su empresa con equipo ya seapara sistemas wired o wireless.",
    customer: "essalud",
  },
];
