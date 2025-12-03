import CustomButton from "./components/CustomButton";
import Card from "./components/Card";
function App() {
  return (
    <div className="h-screen w-full bg-sky-100 flex flex-col gap-10 items-center justify-items-center ">
      <h1 className="mt-10 text-xl font-bold">
        Learing How to Import Components
      </h1>
      <CustomButton />
      <Card />
    </div>
  );
}

export default App;
