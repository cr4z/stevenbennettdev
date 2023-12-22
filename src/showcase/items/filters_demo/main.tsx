import { Box, Typography, Input, Select, Checkbox, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { Campus, Grade, numberToGradeOrEmpty } from "./types_and_helpers";
import SBDButton from "../../../design_system/button";

interface Student {
  name: string;
  grade: Grade;
  campus: Campus;
  specialEducation: boolean;
}

const databaseStudents: Student[] = [
  {
    name: "Steven Bennett",
    grade: 9,
    campus: Campus["Familiar Campus"],
    specialEducation: false,
  },
  {
    name: "Beven Stennett",
    grade: 9,
    campus: Campus["Impressive Campus"],
    specialEducation: true,
  },
  {
    name: "Steb von Bennett",
    grade: 1,
    campus: Campus["Impressive Campus"],
    specialEducation: false,
  },
];

function FiltersDemo() {
  // state: filters
  const [grade, setGrade] = useState<Grade | "">("");
  const [campus, setCampus] = useState<Campus | null>(null);
  const [spedStatus, setSpedStatus] = useState<boolean>(false);

  function clearFilters() {
    setGrade("");
    setCampus(null);
    setSpedStatus(false);
  }

  // state: students
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  // API SIM
  useEffect(() => {
    setStudents(databaseStudents);
  }, []);

  // FILTER APPLIER (called on any filter change)
  useEffect(() => {
    // deep clone new instance of all students
    let studs = [...students] as Student[];

    // apply filters
    if (grade !== "") {
      studs = studs.filter((s: Student) => s.grade === grade);
    }
    if (campus !== null) {
      studs = studs.filter((s: Student) => s.campus === campus);
    }
    if (spedStatus) {
      studs = studs.filter((s: Student) => s.specialEducation);
    }

    setFilteredStudents(studs);
  }, [students, grade, campus, spedStatus]);

  return (
    <Box sx={{ padding: "3rem" }}>
      <Typography color="primary" variant="h6">
        Filter #1: Input
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Typography variant="body2">Filter by grade:</Typography>
        <Input value={grade} onChange={(e) => setGrade(numberToGradeOrEmpty(+e.target.value))} />
      </Box>

      <Typography mt="2rem" color="primary" variant="h6">
        Filter #2: Boolean
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={spedStatus} onClick={() => setSpedStatus(!spedStatus)} />
        <Typography variant="body2">SpEd Status true/false?</Typography>
      </Box>

      <Typography mt="2rem" gutterBottom color="primary" variant="h6">
        Filter #3: Item from array
      </Typography>
      <Box sx={{ display: "flex", width: "30rem", alignItems: "center", gap: "1rem" }}>
        <Select fullWidth value={campus} onChange={(c) => setCampus(c.target.value as Campus)}>
          <MenuItem value={Campus["Familiar Campus"]}>Familiar Campus</MenuItem>
          <MenuItem value={Campus["Impressive Campus"]}>Impressive Campus</MenuItem>
        </Select>
        <Typography sx={{ width: "20rem" }} variant="body1">
          Selection: Item #{campus?.toString()}
        </Typography>
      </Box>

      <SBDButton sx={{ my: "2rem" }} variant="cta" onClick={() => clearFilters()}>
        Clear Filters
      </SBDButton>

      <Typography gutterBottom variant="h4">
        Results:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {filteredStudents.map((s: Student, i) => (
          <StudentCard key={i} student={s} />
        ))}
      </Box>
    </Box>
  );
}

function StudentCard(props: { student: Student }) {
  const { student } = props;
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Typography>{student.name}</Typography>
      <Typography>{Campus[student.campus]}</Typography>
      <Typography>Grade: {student.grade}</Typography>
      <Typography>{student.specialEducation ? "SpEdStatus = true" : ""}</Typography>
    </Box>
  );
}

export default FiltersDemo;
