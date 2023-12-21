import { useEffect, useState } from "react";
import { TableRequestParameters } from "../../types";
import { sortItemsAlphabetically } from "../../../../../sbd_development_kit/utils/sort_items_alphabetically";

export type ExampleRow = {
  employeeId: string;
  name: string;
  position: string;
  email: string;
  salary: string;
  department: string;
};

export type FetchedTableResponse = {
  totalCount: number;
  fetchedRows: ExampleRow[];
};

function generateDummyRows(): ExampleRow[] {
  const dummyRows: ExampleRow[] = [];
  const names = ["John Doe", "Jane Smith", "Mike Brown", "Sara Jones", "Chris Wilson"];
  const positions = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX Designer",
    "Marketing Specialist",
  ];
  const departments = ["Technology", "Product", "Data", "Design", "Marketing"];

  for (let i = 0; i < 60; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const email = name.toLowerCase().replace(" ", ".") + "@example.com";
    const salary = (Math.floor(Math.random() * 50000) + 50000).toString(); // Salary range from 50,000 to 100,000

    dummyRows.push({
      employeeId: crypto.randomUUID().substring(0, 8),
      name: name,
      position: position,
      email: email,
      salary: salary,
      department: department,
    });
  }

  return dummyRows;
}

export const DUMMY_ROWS = generateDummyRows();

export const exampleRowsAPI = {
  getTableResponse: (props: {
    tableRequestParameters: TableRequestParameters<ExampleRow>;
  }): FetchedTableResponse => {
    const { tableRequestParameters } = props;
    const { resultsPerPage, sortBy, pageIndex } = tableRequestParameters;

    const sortedRows = sortBy
      ? sortItemsAlphabetically(DUMMY_ROWS, sortBy.key as keyof ExampleRow, sortBy.order)
      : [...DUMMY_ROWS]; // If no sorting is needed, create a copy of DUMMY_ROWS

    const sliceStartIndex = resultsPerPage * pageIndex;
    const sliceEndIndex = sliceStartIndex + resultsPerPage;

    const fetchedRows = sortedRows.slice(sliceStartIndex, sliceEndIndex);
    const totalCount = DUMMY_ROWS.length;
    return { fetchedRows, totalCount };
  },
};

export function useFetchTable(): {
  table: FetchedTableResponse | null;
  refetch: (trp: TableRequestParameters<ExampleRow>) => void;
} {
  function refetch(tableRequestParameters: TableRequestParameters<ExampleRow>) {
    const res = exampleRowsAPI.getTableResponse({ tableRequestParameters });
    setTable(res);
  }

  const [table, setTable] = useState<FetchedTableResponse | null>(null);

  useEffect(() => {
    refetch({ resultsPerPage: 50, pageIndex: 0, sortBy: null });
  }, []);

  return { table, refetch };
}
