import FindPokemon from "@/components/FindPokemon";
import HomeSquare from "@/components/HomeSquare";
import UfjfMenu from "@/components/UfjfMenu";

const getCurrentDate = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Os meses começam do 0
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};


export default function HomeScreen() {
  function render(atv: number) {
    if (atv === 1)
      return (<UfjfMenu date={getCurrentDate()} />)
    if (atv === 2)
      return (<HomeSquare />)
    if (atv === 3)
      return (<FindPokemon />)

  }

  return render(3);
}
