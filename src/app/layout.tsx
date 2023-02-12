import SearchBox from "./search/(searchBox)/searchBox";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <SearchBox />
        {children}
      </body>
    </html>
  );
}
