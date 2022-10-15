import MyForm from "./components/MyForm";
function App() {
  return (
    <>
      <div className="container p-4 mx-auto mt-4 bg-[#232327] rounded-lg">
        <div className="mx-auto text-center">
          <h2 className="text-xl font-bold">React Hook Form</h2>
          <MyForm />
        </div>
      </div>
    </>
  );
}

export default App;
