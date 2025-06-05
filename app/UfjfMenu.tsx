import UfjfMenu from "@/components/UfjfMenu";

const getCurrentDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Os meses começam do 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
};

export default function HomeSquareScreen() {
    return <UfjfMenu date={getCurrentDate()} />
}