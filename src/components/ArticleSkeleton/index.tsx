export function ArticleLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 gap-y-16 pb-24">
      {emptyArray.map((_item, index) => (
        <div key={index} className="animate-pulse flex flex-col cursor-pointer">
          <div className="flex w-full h-80 bg-slate-400 rounded-md" />
          <div className="grid mt-4 grid-cols-3 gap-4">
            <div className="h-2 bg-slate-400 rounded col-span-3"></div>
            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

const emptyArray = new Array(10).fill("", 0, 9);
