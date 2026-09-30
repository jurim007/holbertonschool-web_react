import "./CourseList.css";
import CourseListRow from "./CourseListRow.jsx";

function CourseList({ courses }) {
  const safeCourses = courses ?? [];

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {safeCourses.length === 0 ? (
          <CourseListRow isHeader={true} textFirstCell="No course available yet" />
        ) : (
          safeCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default CourseList;