import { Box, Typography, Input, Select, Button, Checkbox, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { Campus, Grade, numberToGradeOrEmpty } from "./types_and_helpers";

interface IStudent {
  name: string;
  grade: Grade;
  campus: Campus;
  medicaidOnly: boolean;
}

const databaseStudents: IStudent[] = [
  {
    name: "Iron Maiden",
    grade: 4,
    campus: Campus["Familiar Campus"],
    medicaidOnly: false,
  },
  {
    name: "Grateful Dead",
    grade: 9,
    campus: Campus["Impressive Campus"],
    medicaidOnly: true,
  },
  {
    name: "Avenged Sevenfold",
    grade: 1,
    campus: Campus["Optimal Campus"],
    medicaidOnly: false,
  },
];

function FiltersDemo() {
  // state: filters
  const [grade, setGrade] = useState<Grade | "">("");
  const [campus, setCampus] = useState<Campus | null>(null);
  const [medicaidOnly, setMedicaidOnly] = useState<boolean>(false);

  // state: students
  const [students, setStudents] = useState<IStudent[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<IStudent[]>([]);

  // API SIM
  useEffect(() => {
    setStudents(databaseStudents);
  }, []);

  // FILTER APPLIER (called on any filter change)
  useEffect(() => {
    // deep clone new instance of all students
    let studs = [...students] as IStudent[];

    // apply filters
    if (grade !== "") {
      studs = studs.filter((s: IStudent) => s.grade === grade);
    }
    if (campus !== null) {
      studs = studs.filter((s: IStudent) => s.campus === campus);
    }
    if (medicaidOnly) {
      studs = studs.filter((s: IStudent) => s.medicaidOnly);
    }

    setFilteredStudents(studs);
  }, [students, grade, campus, medicaidOnly]);

  return (
    <Box sx={{ padding: "3rem" }}>
      <Typography color="primary" variant="h6">
        Filter #1: Input
      </Typography>
      <Input value={grade} onChange={(e) => setGrade(numberToGradeOrEmpty(+e.target.value))} />

      <Typography mt="2rem" color="primary" variant="h6">
        Filter #2: Boolean
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox onClick={() => setMedicaidOnly(!medicaidOnly)} />
        <Typography variant="body2">Medicaid Only?</Typography>
      </Box>

      <Typography mt="2rem" gutterBottom color="primary" variant="h6">
        Filter #3: Item from array
      </Typography>
      <Box sx={{ display: "flex", width: "30rem", alignItems: "center", gap: "1rem" }}>
        <Select fullWidth>
          <MenuItem onClick={() => setCampus(Campus["Optimal Campus"])}>Optimal Campus</MenuItem>
          <MenuItem onClick={() => setCampus(Campus["Familiar Campus"])}>Familiar Campus</MenuItem>
          <MenuItem onClick={() => setCampus(Campus["Impressive Campus"])}>Impressive Campus</MenuItem>
        </Select>
        <Typography sx={{ width: "20rem" }} variant="body1">
          Selection: Item #{campus?.toString()}
        </Typography>
      </Box>
      <Typography variant="h4">My Caseload</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {filteredStudents.map((s: IStudent, i) => (
          <StudentCard key={i} student={s} />
        ))}
      </Box>
    </Box>
  );
}

function StudentCard(props: { student: IStudent }) {
  const { student } = props;
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Typography>{student.name}</Typography>
      <Typography>{Campus[student.campus]}</Typography>
      <Typography>Grade: {student.grade}</Typography>
      <Typography>{student.medicaidOnly ? "Is medicaid only" : ""}</Typography>
    </Box>
  );
}

export default FiltersDemo;
