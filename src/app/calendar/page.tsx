import { redirect } from "next/navigation";

export default function VolunteerPage() {
  redirect(
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjI5YWk0b29lbzZ0dG9rdTN1MjNyc29mN2UgOTQ5ZTlmYzExOThmNmJhYmEyOTA4YjJmY2FmNzY4MzgyN2MyMTBkMWNjYzdhMTE2OWJjOWQwYzU0ZWVhNDUxY0Bn&tmsrc=949e9fc1198f6baba2908b2fcaf7683827c210d1ccc7a1169bc9d0c54eea451c%40group.calendar.google.com",
  );
}
