import { StarSystem } from "../../types/starSystem/starSystemTypes";

export const validateStarSystemData = (data: StarSystem) => {
  if (!data || !data.nome || !data.descricao) {
    throw new Error("Dados inválidos");
  }
  return true;
};
