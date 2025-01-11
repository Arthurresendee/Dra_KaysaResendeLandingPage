import ImgHome from '../../assets/ImgHome.jpg';
import { HorarioFuncionamento } from './HorarioFuncionamento';
import { PlanoDeFundo } from '../PlanoDeFundo';

export function Home() {
  return (
    <PlanoDeFundo imagemDeFundoURL={ImgHome}>
      <HorarioFuncionamento />
    </PlanoDeFundo>
  );
}
