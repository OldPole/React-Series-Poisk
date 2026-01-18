export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950 py-8">
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-relaxed text-zinc-500">
          <p>&copy; {new Date().getFullYear()} «SeriesPoisk»</p>
          <p>
            Данный сайт создан исключительно в обучающих целях. <br />
            Все права принадлежат правообладателям.
          </p>
        </div>

        <span className="text-2xl font-black tracking-tighter text-red-600 uppercase">
          SeriesPoisk
        </span>
      </div>
    </footer>
  );
};
