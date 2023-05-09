import React from 'react';
import { GameContext } from "./GameContext";

export const useGame = () => {
  const context = React.useContext(GameContext);
  return context;
}
