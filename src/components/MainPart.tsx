import { useAppSelector } from "../store/hooks";
import Hero from "./Hero";
import InfoTable from "./InfoTable";
import Spinner from "./Spinner";

export default function MainPart() {
  const { isLoading } = useAppSelector((state) => state.weather);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Hero />
      <InfoTable />
    </>
  );
}
