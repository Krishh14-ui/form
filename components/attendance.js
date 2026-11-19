const attendance = [
  { subject: "Mathematics", value: "92%" },
  { subject: "Science", value: "88%" },
  { subject: "English", value: "95%" },
  { subject: "History", value: "90%" },
];

export default function Attendance() {
  return (
    <section>
      <h2>Attendance by Subject</h2>
      {attendance.map(({ subject, value }) => (
        <p key={subject}>
          {subject}: {value}
        </p>
      ))}
    </section>
  );
}
