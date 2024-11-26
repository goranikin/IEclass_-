import {useNavigate} from "react-router-dom";
import {PATH} from "../constants/path.ts";

export const useNavigationRoute = () => {
  const navigate = useNavigate();
  const {MAIN, EXP1, EXP2, EXP3, EXP4} = PATH;

  return {
    toMain: () => navigate(MAIN),
    toExp1: () => navigate(EXP1),
    toExp2: () => navigate(EXP2),
    toExp3: () => navigate(EXP3),
    toExp4: () => navigate(EXP4),
  }
}