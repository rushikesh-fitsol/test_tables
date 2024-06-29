import { CreateTableHardcoded, CreateTableDyn, ExampleDynamicTableSchema } from "./customTableV2";

export default function Home() {
  return (
    <main className="w-screen">
      {/* <CreateTable schema={answerSchema} /> */}
      {/* <Table /> */}
      <CreateTableHardcoded />
      <CreateTableDyn schema={ExampleDynamicTableSchema} />
    </main>
  );
}
