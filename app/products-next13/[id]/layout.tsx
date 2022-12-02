import ItemList from '../ItemsList';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex ">
      <div className="pl-10 overflow-auto ">
        {/* @ts-ignore */}
        <ItemList />
      </div>
      <div className="flex-1 overflow-hidden fixed top-[20%] left-[50%]">
        {children}
      </div>
    </main>
  );
}
