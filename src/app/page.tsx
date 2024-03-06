export default function Home() {
  return (
    <div>
      <span
        className="flex flex-col items-center w-screen h-fit mt-8"
        id="Header"
      >
        <p className="text-3xl">Welcome to TFT bootcamp</p>
        <p className="text-xl">By modembcc</p>
      </span>
      <span
        className="flex flex-col items-center w-screen h-fit mt-8"
        id="Players"
      >
        <div className="flex flex-col h-fit w-2/4 m-2" id="Table">
          <div
            className="flex flex-row justify-between mb-2 w-full"
            id="TableHeader"
          >
            <p className="text-3xl w-3/4 text-center font-bold">IGN</p>
            <p className="text-3xl w-1/4 text-center font-bold">RANK</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-3xl w-3/4 text-center border border-1">
              modembcc
            </p>
            <p className="text-3xl w-1/4 text-center border border-1 border-l-0">
              iron
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-3xl w-3/4 text-center border border-1">
              modembcc
            </p>
            <p className="text-3xl w-1/4 text-center border border-1 border-l-0">
              iron
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-3xl w-3/4 text-center border border-1">
              modembcc
            </p>
            <p className="text-3xl w-1/4 text-center border border-1 border-l-0">
              iron
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-3xl w-3/4 text-center border border-1">
              modembcc
            </p>
            <p className="text-3xl w-1/4 text-center border border-1 border-l-0">
              iron
            </p>
          </div>
        </div>
      </span>
    </div>
  );
}
